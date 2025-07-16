module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-bump');

  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json'],
        commit: true,
        commitMessage: 'chore(release): bump version to %VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false // set true if you want to push to origin
      }
    }
  });

  grunt.registerTask('default', ['bump']);
};
