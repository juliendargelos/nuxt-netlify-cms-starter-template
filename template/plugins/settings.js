import Vue from 'vue'

export default async ({ app }) => {
  Vue.prototype.$settings = (await app.$content('settings').getAll())
    .reduce((settings, field) => {
      settings[field.permalink.substring(1)] = field
      return settings
    }, {})
}
