const path = require('path')
const fs = require('fs')
const suppose = require('suppose')

suppose('yarn', ['run', 'vue-cli:init'], { debug: fs.createWriteStream(path.join(__dirname, '../debug.txt')) })
  .when(/Project name\.*/).respond('\n')
  .when(/Project description\.*/).respond('\n')
  .when(/Author\.*/).respond('\n')
  .when(/vue-cli · Generated\.*/).respond('\n')
  .on('error', error => console.log('Generate test: ' + error.message))
  .end(() => console.log('Generate test: Project generated.'))
