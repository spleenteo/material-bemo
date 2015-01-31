set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir,    'fonts'
set :partials_dir, 'partials'


configure :development do
  activate :livereload
  activate :syntax, line_numbers: false
end

activate :directory_indexes

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end
