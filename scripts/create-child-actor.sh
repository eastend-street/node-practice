#!/bin/sh
cp ./src/templates/AppChild.js.template "./src/actors/${1}.js"
sed -i "s/{AppChild}/${1}/g" "/src/actors/${1}.js"
echo "Created: " + "./src/actors/${1}.js"
