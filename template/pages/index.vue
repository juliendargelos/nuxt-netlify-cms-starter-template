<template>
  <div class="home">
    <v-wrapper margin-height>
      <nuxtdown-body
        :body="body"
        class="home__content"
      />
    </v-wrapper>
  </div>
</template>

<style lang="sass">
.home
  &__content
    @extend %content
</style>

<script>
export default {
  async asyncData({ app, route, payload }) {
    return await app.$content('pages').get('index') || payload
  },

  head() {
    return {
      title: this.title
    }
  }
}
</script>
