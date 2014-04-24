#!/bin/bash

echo "Building site ..."
jekyll build

echo "Running Grunt ..."
grunt
