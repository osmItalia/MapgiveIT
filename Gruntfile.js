module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssc: {
          build: {
            options: {
              sortSelectors: false,
              sortDeclarations: false,
              sort: false,
              safe: true
            },
            // dest: src
            files: {
              '_assets/css/main.min.css': '_assets/css/main.css'
            }
          }
        },

        cssmin: {
          combine: {
            files: {
              'assets/css/main.min.css': ['_assets/css/bootstrap.min.css', '_assets/css/main.min.css'],
              'assets/css/ie-print.min.css': '_assets/css/ie-print.css'
            }
          }
        },

        htmlhint: {
          build: {
            options: {
              'attr-lowercase': true,
              'attr-value-double-quotes': true,
              'doctype-first': true,
              'id-class-value': true,
              'id-unique': true,
              'img-alt-require': true,
              'spec-char-escape': true,
              'src-not-empty': true,
              'tag-pair': true,
              'tag-self-close': true,
              'tagname-lowercase': true
            },
            src: ['_site/**/*.html']
          }
        },

        uglify: {
          build: {
            files: {
              'assets/js/main.min.js': ['_assets/js/vendor/bootstrap.min.js', '_assets/js/plugins.js', '_assets/js/vendor/jquery.a11yAccordion.js', '_assets/js/main.js'],
              'assets/js/lt-ie9.min.js': ['_assets/js/vendor/html5shiv.js', '_assets/js/vendor/respond.min.js', '_assets/js/vendor/html5shiv-printshiv.js'],
              'assets/js/modernizr-2.7.1.min.js': ['_assets/js/vendor/modernizr-2.7.1.min.js'],
              'assets/js/jquery-1.10.2.min.js': ['_assets/js/vendor/jquery-1.10.2.min.js']
            }
          }
        },

        sync: {
          main: {
            files: [
              {cwd: '_assets/fonts', src: ['**'], dest: 'assets/fonts/'}
            ]
          }
        },

        img: {
          task: {
            src: [
              '_assets/img/*.jpg',
              '_assets/img/*.jpeg',
              '_assets/img/*.png',
            ],
            dest: 'assets/img'
          }
        },

        svgmin: {
          options: {
            plugins: [
              { collapseGroups: false }
            ]
          },
          dist: {
            files: [{
              expand: true,
              cwd: '_assets/img',
              src: ['*.svg'],
              dest: 'assets/img',
              ext: '.svg'
            }]
          }
        },

        compress: {
          main: {
            options: {
              mode: 'gzip'
            },
            files: [
              {expand: true,
               cwd: 'assets/img',
               src: ['*.svg'],
               dest: 'assets/img',
               ext: '.svgz'}
            ]
          }
        },

        shell: {
          jekyll: {
            options: {
              stdout: true
            },
            command: 'jekyll build'
          },
          rmAssets: {
            options: {
              stdout: true
            },
            command: 'rm -rf assets/'
          },
          mkAssets: {
            options: {
              stdout: true
            },
            command: 'mkdir -p assets/img'
          },
          mvTemp: {
            options: {
              stdout: true
            },
            command: 'rm -rf _site && mv temp _site'
          }
        },

        hashres: {
          options: {
            encoding: 'utf8',
            fileNameFormat: '${name}.${ext}?${hash}',
            renameFiles: false
          },
          images: {
            src: [
              'temp/assets/img/*.png',
              'temp/assets/img/*.jpg',
              'temp/assets/img/*.jpeg'
            ],
            dest: [
              'temp/*.html',
              'temp/**/*.html',
              'temp/**/*.css',
              'temp/**/*.js'
            ]
          },
          js: {
            src: [
              'temp/assets/js/lt-ie9.min.js',
              'temp/assets/js/main.min.js'
            ],
            dest: [
              'temp/*.html',
              'temp/**/*.html'
            ]
          },
          css: {
            src: [
              'temp/assets/css/main.min.css'
            ],
            dest: [
              'temp/*.html',
              'temp/**/*.html'
            ]
          }
        },

        watch: {
          html: {
            files: ['_site/**/*.html'],
            tasks: ['htmlhint']
          },
          js: {
            files: ['_assets/js/**/*.js'],
            tasks: ['uglify']
          },
          css: {
            files: ['_assets/css/*.css'],
            tasks: ['buildcss']
          },
          img: {
            files: ['_assets/img/*.jpg', '_assets/img/*.png', '_assets/img/*.svg'],
            tasks: ['imagmin', 'svgmin']
          },
          imgFonts: {
            files: ['_assets/img/**', '_assets/fonts/**'],
            tasks: ['sync']
          },
          jekyll: {
            files: [
              '*.html',
              '*.yml',
              '*.txt',
              'a-proposito-open-mapping/**/*',
              'assets/**/*',
              'domande-frequenti/**/*',
              'favicon.*',
              '_includes/**',
              'mappa-sito/**/*',
              'storie/**/*',
              'la-buona-causa/**/*',
              '_layouts/**/*',
              'trascrizioni/**/*'
            ],
            tasks: 'shell:jekyll'
          }
        }
    });

    grunt.registerTask('default', [
      'optimages',
      'sync',
      'uglify',
      'buildcss',
      'shell:jekyll',
      'hashres:images',
      'hashres:js',
      'hashres:css',
      'backupSite',
      'shell:mvTemp',
      'htmlhint'
    ]);

    grunt.registerTask('buildcss', [
      'cssc',
      'cssmin'
    ]);

    grunt.registerTask('optimages', [
      'shell:rmAssets',
      'shell:mkAssets',
      'img',
      'svgmin',
      'compress'
    ]);

    grunt.registerTask('backupSite', 'Makes a dated copy of the _site folder in backups', function() {
      var wrench = require('wrench'),
          d = new Date,
          date = [d.getFullYear(),
                  d.getMonth()+1,
                  d.getDate(),
                  d.getHours(),
                  d.getMinutes(),
                  d.getSeconds()].join('');

      wrench.copyDirSyncRecursive('temp', 'backups/' + date);
    });
};

