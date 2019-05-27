<template>
  <nav class="nav">
    <ul class="nav__items">
      <li
        v-for="(path, label, index) in items"
        :key="index"
        :class="{'nav__item--active': current(path)}"
        class="nav__item"
      >
        <nuxt-link
          :to="path"
          class="nav__link"
        >
          {{ label }}
        </nuxt-link>
      </li>

      <li
        v-if="button"
        class="nav__item nav__item--right"
      >
        <a
          :href="button.path"
          class="nav__button"
        >
          {{ button.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass">
.nav
  height: 100%

  &__items
    width: 100%
    height: 100%
    display: flex
    align-items: center

  &__item
    flex-shrink: 0
    flex-grow: 0

    &:not(:last-of-type)
      margin-right: 30px

    &--right
      margin-left: auto

  &__link, &__button
    text-decoration: none
    text-transform: uppercase
    font:
      family: $display
      size: 12px
    letter-spacing: .2em

  &__link
    color: $grey
    transition: .4s

  &__button
    color: $primary

  &__item:hover &__link, &__item--active &__link
    color: $black
</style>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    },
    button: {
      type: Object,
      default: null
    }
  },

  methods: {
    current(path) {
      return path === this.$nuxt.$route.path
    }
  }
}
</script>
