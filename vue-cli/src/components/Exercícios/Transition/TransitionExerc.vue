<template>
  <div class="modal">
    <button @click="ativo = !ativo">Aparecer/Desaparecer</button>
    <transition name="fade">
        <h1 v-if="ativo">Boa noite :)</h1>
    </transition>
</div>
</template>

<script>
export default {
    name: 'TransitionExerc',
    data() {
        return {
            ativo: false
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>