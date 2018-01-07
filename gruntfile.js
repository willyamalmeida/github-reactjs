
const gruntJs = function (grunt) {

    grunt.initConfig({
        clean: {
            bootstrapJs: ['src/js/bootstrap/'],
            bootstrapCss: ['src/css/bootstrap/'],
            componentesCss: ['src/app/components/*.min.css']
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'node_modules/bootstrap/dist/js/', src: ['*.min.js'], dest: 'src/js/bootstrap' },
                    { expand: true, cwd: 'node_modules/bootstrap/dist/css/', src: ['*.min.css'], dest: 'src/css/bootstrap' }
                ]
            }
        },
        cssmin: {
            main: {
                files: [{
                  expand: true,
                  cwd: 'src/app/components',
                  src: ['*.css', '!*.min.css'],
                  dest: 'src/app/components',
                  ext: '.min.css'
                }]
              } 
        }
        // uglify: {
        //     main: {
        //         files: {
        //             'src/js/app.min.js': ['src/js/app.js']
        //         }
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['clean', 'copy', 'cssmin']);
};


module.exports = gruntJs;