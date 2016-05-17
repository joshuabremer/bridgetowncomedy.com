cd ./bridgetown-ember
./node_modules/.bin/ember build --environment production
cd ..
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
