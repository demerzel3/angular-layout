module.exports = function (grunt) {

    /**
     * Load required Grunt tasks. These are installed based on the versions listed
     * in `package.json` when you do `npm install` in this directory.
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-autoprefixer');

    /**
     * This is the configuration object Grunt uses to give each plugin its
     * instructions.
     */
    grunt.initConfig({
        /**
         * We read in our `package.json` file so we can access the package name and
         * version. It's already there, so we don't repeat ourselves here.
         */
        pkg: grunt.file.readJSON("package.json"),

        /**
         * The banner is the comment that is placed at the top of our compiled
         * source files. It is first processed as a Grunt template, where the `<%=`
         * pairs are evaluated based on this very configuration object.
         */
        usebanner: {
            dist: {
                options: {
                    banner: '/**\n' +
                        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                        ' * <%= pkg.homepage %>\n' +
                        ' *\n' +
                        ' * Copyright (c) <%= grunt.template.today("yyyy") %>\n' +
                        ' * Authors : Gabriele Genta & Martin Mouterde\n' +
                        ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
                        ' */'
                },
                files: {
                    src: [ 'dist/**']
                }
            }
        },
        autoprefixer: {
            dist: {
                src: 'dist/angular-layout.css',
                dest: 'dist/angular-layout.css'
            }
        },
        /**
         * The directories to delete when `grunt clean` is executed.
         */
        clean: [
            'dist/'
        ],

        copy: {
            dist: {
                files: [
                    {
                        src: [ 'src/js/angular-layout.js' ],
                        dest: 'dist/angular-layout.js'
                    }
                ]
            }
        },
        /**
         * Minify the sources!
         */
        uglify: {
            dist: {
                files: {
                    'dist/angular-layout.min.js': 'src/js/angular-layout.js'
                }
            }
        },
        cssmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist',
                        src: ['*.css'],
                        dest: 'dist',
                        ext: '.min.css'
                    }
                ]
            }
        },
        less: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/less',
                        src: ['*.less'],
                        dest: 'dist',
                        ext: '.css'
                    }
                ]
            }
        }
    });

    /**
     * The default task is to build and compile.
     */
    grunt.registerTask('default', [
        'build'
    ]);

    /**
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask('build', [
        'clean',
        'copy',
        'uglify',
        'less',
        'autoprefixer',
        'cssmin',
        'usebanner'
    ]);

};
