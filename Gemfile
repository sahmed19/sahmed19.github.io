source "https://rubygems.org"

# GitHub Pages builds the site with its own pinned gem set; this mirrors it locally.
gem "github-pages", ">= 232", group: :jekyll_plugins

gem "tzinfo-data"
gem "wdm", "~> 0.1.0" if Gem.win_platform?

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jemoji"
  gem "jekyll-include-cache"
end

gem "webrick", "~> 1.8"

# Standard-library gems that newer Rubies no longer bundle by default.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "ostruct"
