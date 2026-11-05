(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header border once the page scrolls
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Reading progress bar on posts
  var progress = document.querySelector("[data-progress]");
  if (progress) {
    var article = progress.parentElement;
    var updateProgress = function () {
      var start = article.offsetTop;
      var end = start + article.offsetHeight - window.innerHeight;
      var t = end > start ? (window.scrollY - start) / (end - start) : 1;
      progress.style.transform = "scaleX(" + Math.min(1, Math.max(0, t)) + ")";
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  // Mobile nav
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    var mobileNav = window.matchMedia("(max-width: 900px)");
    var menuLabel = toggle.querySelector(".sr-only");
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      if (menuLabel) menuLabel.textContent = open ? "Close menu" : "Menu";
    };
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) { if (!header.contains(e.target)) setOpen(false); });
    document.addEventListener("focusin", function (e) { if (!header.contains(e.target)) setOpen(false); });
    mobileNav.addEventListener("change", function () { setOpen(false); });
    nav.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (!link) return;
      setOpen(false);
      if (link.pathname === window.location.pathname && link.hash) {
        var target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
        if (target) target.focus({ preventScroll: true });
      }
    });
  }

  // A compact jump menu on phones; a persistent project list on desktop.
  var projectJump = document.querySelector('[data-project-jump]');
  if (projectJump) {
    var compactProjects = window.matchMedia('(max-width: 1000px)');
    var setProjectJump = function () {
      projectJump.open = !compactProjects.matches;
      projectJump.querySelector('summary').tabIndex = compactProjects.matches ? 0 : -1;
    };
    setProjectJump();
    compactProjects.addEventListener('change', setProjectJump);
    var projectLinks = projectJump.querySelectorAll('a[href^="#"]');
    var projectNav = projectJump.closest('nav');
    var activeProject = null;
    var markProject = function (id) {
      if (id === activeProject) return;
      activeProject = id;
      var currentLink = null;
      projectLinks.forEach(function (link) {
        if (link.hash === '#' + id) {
          link.setAttribute('aria-current', 'location');
          currentLink = link;
        }
        else link.removeAttribute('aria-current');
      });
      if (currentLink && !compactProjects.matches) {
        var menuBounds = projectNav.getBoundingClientRect();
        var linkBounds = currentLink.getBoundingClientRect();
        if (linkBounds.bottom > menuBounds.bottom) projectNav.scrollTop += linkBounds.bottom - menuBounds.bottom;
        else if (linkBounds.top < menuBounds.top) projectNav.scrollTop -= menuBounds.top - linkBounds.top;
      }
    };
    if (projectLinks.length) markProject(window.location.hash.slice(1) || projectLinks[0].hash.slice(1));
    projectJump.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;
      if (compactProjects.matches) projectJump.open = false;
      var target = document.getElementById(link.hash.slice(1));
      if (target) target.focus({ preventScroll: true });
      markProject(link.hash.slice(1));
    });
    // Track the section at the reading position, including reverse scrolling
    // and short projects that can share the viewport.
    var projectSections = document.querySelectorAll('[data-project-section]');
    var projectUpdateQueued = false;
    var queueProjectUpdate = function () {
      if (projectUpdateQueued) return;
      projectUpdateQueued = true;
      window.requestAnimationFrame(function () {
        projectUpdateQueued = false;
        var headerHeight = header ? header.getBoundingClientRect().height : 0;
        var readingLine = headerHeight + (window.innerHeight - headerHeight) * 0.3;
        var current = projectSections[0];
        for (var i = 0; i < projectSections.length; i++) {
          if (projectSections[i].getBoundingClientRect().top <= readingLine) current = projectSections[i];
          else break;
        }
        if (current) markProject(current.id);
      });
    };
    window.addEventListener('scroll', queueProjectUpdate, { passive: true });
    window.addEventListener('resize', queueProjectUpdate);
    queueProjectUpdate();
  }

  // Preview videos: play while on screen, pause when off. Reduced motion shows the poster only.
  var videos = document.querySelectorAll("video[data-autoplay]");
  if (reduceMotion) videos.forEach(function (v) { v.controls = !v.closest("a"); });
  if (videos.length && !reduceMotion && "IntersectionObserver" in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          if (v.preload === "none") { v.preload = "auto"; v.load(); }
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { rootMargin: "120px 0px", threshold: 0.15 });
    videos.forEach(function (v) { vio.observe(v); });
  }

  // Table of contents built from the article's h2/h3, with scroll-spy
  var tocList = document.querySelector("[data-toc-list]");
  var prose = document.querySelector("[data-prose]");
  if (tocList && prose) {
    var heads = prose.querySelectorAll("h2[id], h3[id]");
    if (!heads.length) {
      document.querySelector("[data-toc]").remove();
    } else {
      var links = [];
      heads.forEach(function (h) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        a.className = "lvl-" + h.tagName.charAt(1);
        li.appendChild(a);
        tocList.appendChild(li);
        links.push(a);
      });
      if ("IntersectionObserver" in window) {
        var setActive = function (id) {
          links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + id); });
        };
        var tio = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
        }, { rootMargin: "-15% 0px -70% 0px" });
        heads.forEach(function (h) { tio.observe(h); });
      }
    }
  }

  // Fade-in for homepage cards
  if (!reduceMotion && "IntersectionObserver" in window) {
    var items = document.querySelectorAll(".card-link, .post-card");
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add("is-visible");
        rio.unobserve(el);
        // Hand transform/transition back to the hover styles once the fade-in is done
        setTimeout(function () { el.classList.remove("reveal", "is-visible"); el.style.transitionDelay = ""; }, 1000);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 3) * 70 + "ms";
      rio.observe(el);
    });
  }
})();
