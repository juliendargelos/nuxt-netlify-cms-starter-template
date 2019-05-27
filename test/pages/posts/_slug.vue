<template>
  <div class="post">
    <div class="post__header">
      <h2 class="post__title">
        <v-wrapper>
          {{ title }}
        </v-wrapper>
      </h2>
      <img
        :src="image"
        class="post__image"
      >
    </div>

    <v-wrapper margin-height>
      <nuxtdown-body
        :body="body"
        class="post__content"
      />
    </v-wrapper>
  </div>
</template>

<style lang="sass">
.post
  &__header
    position: relative

  &__image
    width: 100%
    height: 400px
    object-fit: cover

  &__title
    width: 100%
    bottom: -.3em
    position: absolute
    font:
      family: $display
      size: 100px
      weight: bolder
    color: $white
    text-transform: uppercase
    +text-stroke
      color: transparent

  &__content
    @extend %content
</style>

<script>
export default {
  async asyncData({ app, route, payload }) {
    return await app.$content('posts').get(route.path) || payload
  },

  head() {
    return {
      title: this.title
    }
  }
}
</script>
