#!/bin/bash

# Exit on any error
set -e
realpath () {
  [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}
dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
echo "${dir}"
cd "${dir}"

cd bridgetown-ember;
git checkout master;

if git pull --ff origin master ; then
    echo "."
else
    echo "You have local changes that need to be resolved..."
    exit 1
fi

echo "\n\n\n\n======================================"
echo "Refreshing Festival Data..."
echo "======================================\n\n"

if node _node_scripts/build.js ; then
    :
else
    echo "Node Build Failed"
    exit 1
fi

if [ -z "$(git status --porcelain)" ]; then
  echo "No changes!"
  #exit 1
else
  git add .;
  numberfileschanges=$(git diff --cached --numstat | wc -l);
  commitdiff=$(git --no-pager diff --name-status;);
  git commit -a -m "Updated site - ${numberfileschanges} files changed" -m "${commitdiff}";
fi

echo "\n\n\n\n======================================"
echo "Files changed:"
echo "======================================"
git --no-pager diff --name-status;
echo "======================================\n\n"

if git push origin master ; then
    :
else
    echo "Git push failed"
    exit 1
fi

echo "\n\n\n\n======================================"
echo "Building Ember App..."
echo "======================================\n\n"

if npm install ; then
    :
else
    echo "Are you in the wrong directory?"
    exit 1
fi


bower install;

if ember build --environment="production"  ; then
    :
else
    echo "Ember build failed"
    exit 1
fi

cd ./../;

echo "\n\n\n\n======================================"
echo "Syncing Images..."
echo "======================================\n\n"
rsync -rv --size-only --delete ./bridgetown-ember/dist/festival-json/ ./festival-json;
rsync -rv --size-only --delete ./bridgetown-ember/dist/assets/ ./assets;
rsync -rv --size-only --delete ./bridgetown-ember/dist/img/ ./img;
echo "\n\n\n\n======================================"
echo "Building Jekyll Pages..."
echo "======================================\n\n"
node _node_scripts/build.js;


echo "\n\n\n\n======================================"
echo "Files changed:"
echo "======================================"
git --no-pager diff --name-status;
echo "======================================\n\n"

echo "\n\n\n\n======================================"
echo "Fingerprint Assets..."
echo "======================================\n\n"

appjs=$(find ./assets -name "bridgetown*.js" -type f -exec basename {} \; 2>&1);
vendorjs=$(find ./assets -name "vendor*.js" -type f -exec basename {} \; 2>&1);
echo "<!-- This file was generated with build.sh -->\n\n" > _includes/footer.html
echo "<script src='/assets/${vendorjs}'></script>" >> _includes/footer.html
echo "<script src='/assets/${appjs}'></script>" >> _includes/footer.html

appcss=$(find ./assets -name "bridgetown*.css" -type f -exec basename {} \; 2>&1);
vendorcss=$(find ./assets -name "vendor*.css" -type f -exec basename {} \; 2>&1);
echo "<!-- This file was generated with build.sh -->\n\n" > _includes/styles.html
echo "<link rel='stylesheet' href='/assets/${vendorcss}'></link>" >> _includes/styles.html
echo "<link rel='stylesheet' href='/assets/${appcss}'></link>" >> _includes/styles.html

git add .;
numberfileschanges=$(git diff --cached --numstat | wc -l);
commitdiff=$(git --no-pager diff --name-status;);
git commit -a -m "Updated site - ${numberfileschanges} files changes" -m "${commitdiff}";

git push origin gh-pages;