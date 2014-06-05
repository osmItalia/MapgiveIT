#!/bin/bash

if [ -d _site ]; then
    echo "Removing _site directory ..."
    rm -r _site
fi

if [ -d temp ]; then
    echo "Removing temp directory ..."
    rm -r temp
fi

if [ -d assets ]; then
    echo "Removing assets directory ..."
    rm -r assets
fi
