# Utility for development that reruns stat.js when it changes.
# It requires inotify, and assume a node executable
# with async-support in /usr/bin
# (unlike the one currently in the path through nvm)

while inotifywait -e modify,close_write,move_self -q stat.js
do
  kill -9 `cat .pid`; rm .pid; sleep 0.1
  /usr/bin/node stat.js &
  echo $! > .pid
done
