module.exports = function(grunt) {

    // Banner at the top of content
    var _banner = '/* <%= pkg.name %> - v<%= pkg.version %>  (<%= grunt.template.today("yyyy-mm-dd") %>)*/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                banner: _banner
            },

            // JS Concatination
            'dist/js/Scripts.js': [
                'src/js/Map.js',
                'src/js/Service.js'
            ],

            // CSS Concatination
            'dist/css/Styles.css': [
                'src/css/Style.css',
                'src/css/Map.css'
            ]
        },

        // JS minify
        uglify: {
            options: {
                banner: _banner,
                sourceMap: true
            },
            thor: {
                files: {
                    'dist/js/Scripts.min.js': [
                        'dist/js/Scripts.js'
                    ]
                }
            }
        },

        // CSS minify
        cssmin: {
            thor: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1,
                    banner: _banner
                },
                files: {
                    'dist/css/Styles.min.css': [
                        'dist/css/Styles.css'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // register task when we run grunt
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};