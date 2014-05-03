#!/bin/bash

echo "Building site ..."
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"
rvm use 2.1.0
LC_ALL="it_IT.UTF-8" jekyll build

echo "Running Grunt ..."
grunt
