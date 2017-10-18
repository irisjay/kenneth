#!/usr/bin/env bash
DIR="$(sudo dirname "$(readlink -f "$0")")"
cd "$DIR"

. ~/.nvm/nvm.sh
nvm use 8.7.0
node --version
node preprocess.js