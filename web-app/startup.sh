#!/bin/bash

# Setup environment
cd /workspace/web-app
npm install --force
export PATH="$PATH:$(npm bin)"

# Run app
if [ "$RUN_ENV" = "dev" ] || [ "$RUN_ENV" = "\"dev\"" ]; then 
  npm run dev -- -p $FRONTEND_PORT;
  exit 0;
fi

if [ "$RUN_ENV" = "prod" ] || [ "$RUN_ENV" = "\"prod\"" ]; then
  npm run build;
  npm run start -- -p $FRONTEND_PORT;
  exit 0;
fi

echo "RUN_ENV is not set to dev or prod"
exit 1
