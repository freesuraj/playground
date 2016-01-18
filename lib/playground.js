var path = require('path')
const userdir = process.cwd()
const exec = require('child_process').exec
var templatedir = path.join(__dirname, '../assets/Template.playground')
exports.templatedir = templatedir

exports.createPlayground = function(file) {
  // Copy the templatedir to current dir and change its name
  var copyCommand = 'cp -r ' + templatedir + ' ' + userdir
  exec(copyCommand, function(error, stdout, stderr) {
    if(error != null) {
      console.log("Error in copying " + error + "\n" + stderr);
      process.exit(1)
    } else {
      var userTemplateDir = path.join(userdir, 'Template.playground')
      var userPlaygroundDir = path.join(userdir, file + '.playground')
      var moveCommand = 'mv ' + userTemplateDir + ' ' + userPlaygroundDir
      exec(moveCommand, function(error, stdout, stderr) {
        if(error != null) {
          console.log(stdout + "\nError in renaming " + error + "\n" + stderr);
        } else {
          console.log('Successfully created playground named %s', file)
          var openCommand = 'open ' + userPlaygroundDir
          exec(openCommand, function(err, stdout, stderr){})
        }
      })
    }
  })
}
