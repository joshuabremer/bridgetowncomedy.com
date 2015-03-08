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
          command += "ember build;";
          command += "cd ../;";
          command += "rm -r ./assets;";
          command += "cp -r ./bridgetown-ember/dist/assets ./assets;";

          command += "rm -r ./img;";
          command += "cp -r ./bridgetown-ember/dist/img ./img;";
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
  grunt.registerTask('default', ['clean','emberTemplates','uglify', 'template', 'jekyll']);


};