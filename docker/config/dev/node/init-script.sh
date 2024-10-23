#!/bin/bash

NODE_MODULES_DIR="/app/code/node_modules"

if [ ! -d "$NODE_MODULES_DIR" ]; then
  echo "node_modules does not exist. Running 'yarn install'..."
  cd /app/code && yarn install
else
  echo "node_modules already exists. Skipping 'yarn install'."
fi

echo "Running 'yarn run serve'..."
cd /app/code && yarn run dev &

tail -f /dev/null