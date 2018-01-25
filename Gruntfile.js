/*jshint node: true, strict: false */

// -------------------------- grunt -------------------------- //

module.exports = function( grunt ) {

  var mainFile = grunt.file.readJSON('bower.json').main;
  
  var banner = ( function() {
    var src = grunt.file.read( mainFile );
    var re = new RegExp('^\\s*(?:\\/\\*[\\s\\S]*?\\*\\/)\\s*');
    var matches = src.match( re );
    var banner = matches[0].replace( 'Packery layout mode', 'Packery layout mode PACKAGED' );
    return banner;
  })();

  grunt.initConfig({
    // ----- global settings ----- //
    namespace: 'isotope',
    dataDir: 'tasks/data',

    // ----- tasks settings ----- //

    jshint: {
      src: [ mainFile ],
      options: {
        "browser": true,
        "devel": false,
        "strict": true,
        "undef": true,
        "unused": true,
        "predef": {
          "define": false,
          "module": false,
          "require": false
        }
      }
    },

    requirejs: {
      pkgd: {
        options: {
          baseUrl: 'bower_components',
          include: [
            'isotope-packery/packery-mode'
          ],
          out: 'packery-mode.pkgd.js',
          optimize: 'none',
          paths: {
            'isotope-packery': '../',
            outlayer: 'empty:',
            'get-style-property': 'empty:',
            'get-size': 'empty:',
            'isotope-layout': 'empty:'
          },
          wrap: {
            start: banner
          }
        }
      }
    },

    uglify: {
      pkgd: {
        files: {
          'packery-mode.pkgd.min.js': [ 'packery-mode.pkgd.js' ]
        },
        options: {
          banner: banner
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask( 'pkgd-edit', function() {
    var outFile = grunt.config.get('requirejs.pkgd.options.out');
    var contents = grunt.file.read( outFile );
    contents = contents.replace( "'isotope-packery/packery-mode',", '' );
    grunt.file.write( outFile, contents );
    grunt.log.writeln( 'Edited ' + outFile );
  });

  grunt.registerTask( 'default', [
    // 'jshint',
    'requirejs',
    'pkgd-edit',
    'uglify'
  ]);

};
