echo "The application should serve on [localhost:4000](http://localhost:4000/) by default."
echo "Building project..."

kill -kill `lsof -t -i tcp:4000`
bundle install
bundle update --bundler
bundle update faraday
bundle exec jekyll serve --watch

echo "The application should be served on [localhost:4000](http://localhost:4000/)"