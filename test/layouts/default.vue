<template>
  <div>
    <v-header>
      <v-nav
        :items="{
          'Home': '/',
          'About': '/about',
          'Posts': '/posts'
        }"

        :button="{
          label: 'Admin',
          path: '/admin'
        }"
      />
    </v-header>

    <v-main>
      <nuxt />
    </v-main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate(title) {
        return [title, this.$settings.website.title]
          .filter(Boolean)
          .join(' - ')
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$settings.website.description
        }
      ]
    }
  }
}
</script>
