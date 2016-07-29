module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          'assets/stylesheets/material-foundation.css': 'assets/stylesheets/material-foundation.scss',
          'assets/stylesheets/demo.css': 'assets/stylesheets/demo.scss'
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
          'assets/javascripts/material-foundation.js': [
            'bower_components/what-input/what-input.js',
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation-sites/dist/foundation.js',
            'assets/javascripts/src/ripple.js',
            'assets/javascripts/src/switches.js',
            'assets/javascripts/src/material-foundation.js'
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
