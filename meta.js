const path = require('path')
const fs = require('fs')

module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    },
    readme: fs.readFileSync(path.join(__dirname, 'README.md')).toString()
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js + Netlify CMS project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  skipInterpolation: [
    "**/*.vue",
    "app.html",
    "static/admin/config.yml"
  ],
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
