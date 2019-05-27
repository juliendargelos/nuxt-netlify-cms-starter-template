<template>
  <div class="posts">
    <v-wrapper margin-height>
      <ul class="posts__items">
        <li
          v-for="post in posts"
          :key="post.slug"
          class="posts__item"
        >
          <nuxt-link
            :to="post.permalink"
            class="posts__link"
          >
            {{ post.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-wrapper>
  </div>
</template>

<style lang="sass">
.posts
  &__item
    &:not(:last-of-type)
      border-bottom: 1px solid $light-grey

  &__link
    padding:
      top: 30px
      bottom: 30px
    display: block
    font:
      size: 100px
      weight: bolder
      family: $display
    color: $light-grey
    text-decoration: none
    transition: .4s
    line-height: 1.2em
    text-transform: uppercase
    +text-stroke(rgba($black, 0))

  &__item:first-of-type &__link
      padding-top: 0

  &__item:last-of-type &__link
      padding-bottom: 0

  &__item:hover &__link
    color: rgba($light-grey, 0)
    +text-stroke
</style>

<script>
export default {
  async asyncData({ app, payload }) {
    return {
      posts: await app.$content('/posts').getAll() || payload
    }
  },

  head() {
    return {
      title: 'Posts'
    }
  }
}
</script>
