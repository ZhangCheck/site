/**
 * Created by Chack on 2015/3/14.
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript:{
            bridge:{
                src:["src/*.ts"],
                dest:"js/home.js",
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap: true,
                    removeComment:true
                }
            }
        },
        watch:{
            bridge:{
                files:["src/*.ts"],
                tasks:["typescript:bridge"]
            }
        }
    });


    // Default task(s).
    grunt.registerTask('default', ['typescript','watch']);

};