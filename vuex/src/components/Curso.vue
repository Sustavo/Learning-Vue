<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <p>Curso</p>
        <Aula />
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Aula from './Aula.vue';

export default {
    name: 'Curso',
    components: {
        Aula
    }
}
</script>

<style>

</style>