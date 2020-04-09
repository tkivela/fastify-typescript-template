#!/bin/bash
yarn build
shopt -s extglob
rm -rf !(dist|node_modules|"package.json")
