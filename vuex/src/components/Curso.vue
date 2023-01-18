<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <button @click="handleClick">Clique aqui</button>
        <p>{{ user }}</p>
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState } from 'vuex';

export default {
    name: 'Curso',
    methods: {
        handleClick() {
            this.$store.dispatch('changeUser', {
                name: 'Ave',
                id: '2345',
            });
        }
    },
    computed: {
        ...mapState(['user']),
    }
}
</script>

<style>

</style>