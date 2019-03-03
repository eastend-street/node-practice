#!/bin/sh
cp src/templates/App.js.template "./src/${1}.js"
cp src/templates/App.json.template "./src/${1}.json"

sed -i "s/{App}/${1}/g" "./src/${1}.js"
sed -i "s/{App}/${1}/g" "./src/${1}.json"

echo "Created: " + "./src/${1}.js"
echo "Created: " + "./src/${1}.json"
