<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>User {{ aulasCompletas }}</p>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    computed: {
        aulasCompletas() {
            return this.$store.state.aulasCompletas;
        }
    }
}
</script>

<style>

</style>