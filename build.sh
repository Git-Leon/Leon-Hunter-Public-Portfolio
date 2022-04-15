portNumber=4000
echo "The application should serve on [localhost:$portNumber](http://localhost:$portNumber/) by default."
echo "Building project..."

kill -kill `lsof -t -i tcp:$portNumber`
bundle install
bundle update --bundler
bundle update faraday
bundle exec jekyll serve --watch

echo "The application should be served on [localhost:$portNumber](http://localhost:$portNumber/)"