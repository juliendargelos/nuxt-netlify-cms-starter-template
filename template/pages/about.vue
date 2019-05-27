<template>
  <div class="about">
    <v-wrapper margin-height>
      <h1 class="about__title">
        {{ title }}
      </h1>
      <nuxtdown-body
        :body="body"
        class="about__content"
      />
    </v-wrapper>
  </div>
</template>

<style lang="sass">
.about
  &__title, &__content
    font:
      size: 100px
      weight: bolder
      family: $display
    letter-spacing: .07em
    text-transform: uppercase

  &__title
    color: transparent
    +text-stroke

  &__content
    color: $light-grey
</style>

<script>
export default {
  async asyncData({ app, route, payload }) {
    return await app.$content('pages').get('about') || payload
  },

  head() {
    return {
      title: this.title
    }
  }
}
</script>
