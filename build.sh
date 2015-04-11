cd bridgetown-ember;
# git checkout master;

# if git pull --ff origin master ; then
#     echo "."
# else
#     echo "You have local changes that need to be resolved..."
#     exit 1
# fi

# echo "\n\n\n\n======================================"
# echo "Refreshing Festival Data..."
# echo "======================================\n\n"

# if node _node_scripts/build.js ; then
#     echo "Command succeeded"
# else
#     echo "Node Build Failed"
#     exit 1
# fi

# git add .;
# git commit -am "Updated site"

# if git push origin master ; then
#     echo "Command succeeded"
# else
#     echo "Git push failed"
#     exit 1
# fi

# echo "\n\n\n\n======================================"
# echo "Building Ember App..."
# echo "======================================\n\n"

if npm install ; then
    echo "Command succeeded"
else
    echo "Are you in the wrong directory?"
    exit 1
fi


bower install;

if ember build --environment="production"  ; then
    echo "Command succeeded"
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
git add .;
git commit -am "Updated site";


echo "\n\n\n\n======================================"
echo "Files changed:"
echo "======================================"
git diff-tree --no-commit-id --name-status -r HEAD;
echo "======================================\n\n"


# git push origin gh-pages;