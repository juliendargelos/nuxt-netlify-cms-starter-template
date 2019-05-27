<template>
  <div
    :class="{
      'wrapper--full-width': fullWidth,
      'wrapper--full-height': fullHeight,
      'wrapper--margin-left': marginLeft,
      'wrapper--margin-right': marginRight,
      'wrapper--margin-width': marginWidth,
      'wrapper--margin-top': marginTop,
      'wrapper--margin-bottom': marginBottom,
      'wrapper--margin-height': marginHeight
    }"
    class="wrapper"
  >
    <slot />
  </div>
</template>

<style lang="sass">
.wrapper
  width: 100%
  max-width: #{$wrapper-width + $wrapper-margin*2}
  margin:
    left: auto
    right: auto
  box-sizing: border-box
  position: relative

  &--full-width
    max-width: none

  &--full-height
    height: 100%

  &--margin-left
    padding-left: $wrapper-margin

  &--margin-right
    padding-right: $wrapper-margin

  &--margin-width
    @extend .wrapper--margin-left
    @extend .wrapper--margin-right

  &--margin-top
    padding-top: $wrapper-margin

  &--margin-bottom
    padding-bottom: $wrapper-margin

  &--margin-height
    @extend .wrapper--margin-top
    @extend .wrapper--margin-bottom
</style>

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    fullHeight: {
      type: Boolean,
      default: false
    },
    marginLeft: {
      type: Boolean,
      default: false
    },
    marginRight: {
      type: Boolean,
      default: false
    },
    marginWidth: {
      type: Boolean,
      default: true
    },
    marginTop: {
      type: Boolean,
      default: false
    },
    marginBottom: {
      type: Boolean,
      default: false
    },
    marginHeight: {
      type: Boolean,
      default: false
    }
  }
}
</script>
