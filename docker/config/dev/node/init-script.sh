#!/bin/bash

NODE_MODULES_DIR="/app/code/node_modules"

cd /app/code
  
if [ ! -d "$NODE_MODULES_DIR" ]; then
  echo "node_modules does not exist. Running 'yarn install'..."
  yarn install

  echo "Fill DB"
  yarn run seed 
else
  echo "node_modules already exists. Skipping 'yarn install'."
fi

echo "Running 'yarn run serve'..."

yarn run dev &

tail -f /dev/null