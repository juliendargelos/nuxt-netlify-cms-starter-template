<template>
  <header class="v-header">
    <v-wrapper full-height>
      <slot />
    </v-wrapper>
  </header>
</template>

<style lang="sass">
.v-header
  background: $white
  height: 90px
  border-bottom: 1px solid $light-grey
  z-index: 2
  position: relative
</style>
