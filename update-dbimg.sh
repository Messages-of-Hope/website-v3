#!/bin/bash

# Destroy docker container
docker compose down

# Pull new db image
rm -rf dbimg
mkdir dbimg
scp messages-of-hope:/messages-of-hope/dbimg.zip tmp.zip
unzip -d dbimg -o tmp.zip
rm -rf tmp.zip
