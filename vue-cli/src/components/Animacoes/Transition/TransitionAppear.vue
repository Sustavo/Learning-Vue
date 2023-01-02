<template>
  <div>
    <transition appear>
        <h1>Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'TransitionAppear'
}
</script>

<style>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 2s;
    }
    .v-enter,
    .v-leave-to {
    opacity: 0;
    }
</style>