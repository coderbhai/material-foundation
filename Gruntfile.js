module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          'vendor/assets/stylesheets/material-foundation.css': 'vendor/assets/stylesheets/material-foundation.scss',
          'vendor/assets/stylesheets/demo.css': 'vendor/assets/stylesheets/demo.scss'
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      my_target: {
        files: {
          'vendor/assets/javascripts/material-foundation.js': [
            'bower_components/what-input/what-input.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation-sites/dist/foundation.js',
            'vendor/assets/javascripts/src/ripple.js',
            'vendor/assets/javascripts/src/switches.js',
            'vendor/assets/javascripts/src/material-foundation.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: '**/*.js',
        tasks: ['uglify'],
        options: {
          interrupt: true,
        },
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass','uglify']);
};
