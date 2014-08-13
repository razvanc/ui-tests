module.exports = function(grunt) {
    //configure grunt

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'nested'
                },
                files: {
                    'assets/css/main.css': 'src/scss/main.scss'
                }
            }
        },

        // cssmin: {
        // minify: {
        // expand: true,
        // cwd: 'assets/css/',
        // src: ['*.css'],
        // dest: 'assets/css/',
        // ext: '.min.css'
        // }
        // },

        watch: {
            stylesheets: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass']
            }

        }
    });

    //loading grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //create grunt tasks
    grunt.registerTask('default', ['sass']);

};