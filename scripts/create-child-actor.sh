#!/bin/sh
cp ./src/templates/AppChild.js.template "./src/actors/${1}.js"
cp ./src/templates/AppChild.json.template "./src/actors/${1}.json"
sed -i "s/{AppChild}/${1}/g" "/src/actors/${1}.js"
sed -i "s/{AppChild}/${1}/g" "/src/actors/${1}.json"
echo "Created: " + "./src/actors/${1}.js"
echo "Created: " + "./src/actors/${1}.json"
