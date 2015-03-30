module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    template: {
        'process-html-template': {
            options: {
                data: {
                    fingerprint: new Date().getTime()
                }
            },
            files: {
                '_includes/footer.html': ['_includes/footer.tpl']
            }
        }
    },

    shell: {
      gitpush: {
        command: function () {
            return 'git commit -am "Changes";git push ss;';
        }
      },
      build_fixtures: {
        command: function () {
            return 'node build_venues.js && node build_events.js && node build_performer_images.js && node build_show_images.js';
        }
      },
      build_ember: {
        command: function() {
          var command = "";
          command += "cd bridgetown-ember;";
          command += "git co master;";
          command += "git pull origin master;";
          command += "bower install;";
          command += 'ember build --environment="production";';
          command += "cd ../;";
          command += "rsync -rv --size-only --delete ./bridgetown-ember/dist/festival-json/ ./festival-json;";
          command += "rsync -rv --size-only --delete ./bridgetown-ember/dist/assets/ ./assets;";
          command += "rsync -rv --size-only --delete ./bridgetown-ember/dist/img/ ./img;";
          command += "node _node_scripts/build.js;"
          return command;
        },

        options: {
          callback: function(err, stdout, stderr, cb) {
            console.log(err);
            console.log(stdout);
            console.log(stderr);
            cb();
          }
        }

      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-template');
  grunt.registerTask('deploy', ['shell:build_ember','template']);


};