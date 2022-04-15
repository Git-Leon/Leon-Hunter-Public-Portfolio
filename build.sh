portNumber=4005
echo "The application should serve on [localhost:$portNumber](http://localhost:$portNumber/) by default."
echo "Building project..."

kill -kill `lsof -t -i tcp:$portNumber`
bundle install
bundle update --bundler
bundle update faraday
bundle exec jekyll serve --watch --port $portNumber

echo "The application should be served on [localhost:$portNumber](http://localhost:$portNumber/)"