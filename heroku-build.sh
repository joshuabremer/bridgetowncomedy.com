#!/bin/bash

# Exit on any error
set -e

error_mail () {
  TODAY=$(date +'%Y-%m-%d-%H:%M:%S')
  curl -A 'Mandrill-Curl/1.0' -d '{"key": "2HXCEL43tEMpOaqF6_ODdw","message": {"html": "<p>Deploy Error</p>","text": "Deploy Error","subject": "Deploy Error","from_email": "joshua.bremer@gmail.com","from_name": "Josh Bremer","to": [{"email": "joshua.bremer@gmail.com","name": "Joshua Bremer","type": "to"}]     },"async": false,"ip_pool": "Main Pool"}' 'https://mandrillapp.com/api/1.0/messages/send.json'
}

trap "echo 'Received signal EXIT'" 0 # EXIT
trap "echo 'Received signal HUP';error_mail" 1 # HUP
trap "echo 'Received signal INT';error_mail" 2 # INT
trap "echo 'Received signal QUIT';error_mail" 3 # QUIT
trap "echo 'Received signal PIPE';error_mail" 13 # PIPE
trap "echo 'Received signal TERM';error_mail" 15 # TERM




dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
echo "${dir}"
cd "${dir}"

if git pull --ff origin gh-pages ; then
    echo "."
else
    echo "You have local changes that need to be resolved..."
    exit 1
fi

cd bridgetown-ember;
git fetch origin;
git checkout jb/show-events;

if git pull --ff origin jb/show-events ; then
    echo "."
else
    echo "You have local changes that need to be resolved..."
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

bower install --allow-root;

if ./node_modules/.bin/ember build --environment="production" ; then
# if ember build  ; then
    :
else
    echo "Ember build failed"
    exit 1
fi






cd ./../;


echo "\n\n\n\n======================================"
echo "Refreshing Festival Data..."
echo "======================================\n\n"

if npm install ; then
    :
else
    echo "Are you in the wrong directory?"
    exit 1
fi

if node _node_scripts/build.js ; then
    :
else
    echo "Node Build Failed"
    exit 1
fi

echo "\n\n\n\n======================================"
echo "Syncing Images..."
echo "======================================\n\n"
rsync -rv --size-only --delete ./bridgetown-ember/dist/assets/ ./assets;
rsync -rv --size-only --delete ./bridgetown-ember/dist/img/ ./img;

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
printf "<!-- This file was generated with build.sh -->\n\n" > _includes/footer.html
printf "<script src='/assets/${vendorjs}'></script>" >> _includes/footer.html
printf "<script src='/assets/${appjs}'></script>" >> _includes/footer.html

appcss=$(find ./assets -name "bridgetown*.css" -type f -exec basename {} \; 2>&1);
vendorcss=$(find ./assets -name "vendor*.css" -type f -exec basename {} \; 2>&1);
printf "<!-- This file was generated with build.sh -->\n\n" > _includes/styles.html
printf "<link rel='stylesheet' href='/assets/${vendorcss}'></link>" >> _includes/styles.html
printf "<link rel='stylesheet' href='/assets/${appcss}'></link>" >> _includes/styles.html

bundle exec jekyll build
cp -a ./_site/. ../btown-secure/htdocs