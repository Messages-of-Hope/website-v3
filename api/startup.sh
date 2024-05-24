#!/bin/bash

# Setup environment
cd /workspace/api
python3.11 -m venv .venv
source .venv/bin/activate
python3.11 -m pip install -r .requirements

# Run app
if [ "$RUN_ENV" == "dev" ] || [ "$RUN_ENV" == "\"dev\"" ]; then
  python3.11 app.py;
  exit 0;
fi
if [ "$RUN_ENV" == "prod" ] || [ "$RUN_ENV" == "\"prod\"" ]; then
  waitress-serve --port="$BACKEND_PORT" app:app;
  exit 0;
fi

# Exit if RUN_ENV is not set to dev or prod
echo "RUN_ENV is not set to dev or prod"
exit 1
