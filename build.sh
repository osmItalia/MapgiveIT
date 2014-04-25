#!/bin/bash

echo "Building site ..."
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"
rvm use 2.1.0
jekyll build

echo "Running Grunt ..."
grunt
