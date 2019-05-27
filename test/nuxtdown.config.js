const shiftHeadings = require('markdown-it-shift-headings')
const namedHeadings = require('markdown-it-named-headings')

const markdown = {
  plugins: [
    shiftHeadings,
    namedHeadings
  ]
}

module.exports = {
  api: isStatic => ({
    baseURL: 'http://localhost:3000',
    browserBaseURL: !isStatic ? '' : process.env.BASE_URL
  }),
  content: [
    ['posts', {
      page: '/posts/_slug',
      permalink: '/posts/:slug',
      markdown,
      generate: [
        'get',
        'getAll'
      ]
    }],
    ['settings', {
      page: '/',
      permalink: '/:slug',
      isPost: false,
      markdown,
      generate: [
        'getAll'
      ]
    }],
    ['pages', {
      page: '/:slug',
      permalink: '/:slug',
      isPost: false,
      markdown,
      generate: [
        'get'
      ]
    }]
  ]
}
