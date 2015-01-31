module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bemo');

  grunt.initConfig({
    bemo: {
      scaffold: {
        sassRoot:   "source/stylesheets",
        sassExt:    "sass",
      },
      webfonts: {
        src:        "source/fonts/svg",
        fontDest:   "source/fonts",
        sassDest:   "source/stylesheets/variables/_icon-glyphs.scss",
        formats:    [ "woff" ]
      },
      sprites: {
        src:        "source/images/sprites",
        imageDest:  "source/images/sprites-{{density}}.png",
        sassDest:   "source/stylesheets/variables/_sprites.scss"
      }
    }
  });

  grunt.registerTask('default', ['bemo-webfonts']);

};

