batchScriptName='.batch-port-kill.bat'
portNumber=4007
echo "The application should serve on [localhost:$portNumber](http://localhost:$portNumber/) by default."
echo "Building project..."

echo '
FOR /F "tokens=5 delims= " %P IN ('netstat -a -n -o ^| findstr :$portNumber') DO TaskKill.exe /PID %P /T /F
' > $batchScriptName
./$batchScriptName
rm $batchScriptName




kill -kill `lsof -t -i tcp:$portNumber`
bundle install
bundle update --bundler
bundle update faraday
bundle exec jekyll serve --watch --port $portNumber

echo "The application should be served on [localhost:$portNumber](http://localhost:$portNumber/)"