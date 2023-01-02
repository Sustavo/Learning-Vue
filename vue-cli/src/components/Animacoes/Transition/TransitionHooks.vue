<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition name="fade" @before-enter="enter" @enter="beforeEnter" @before-leave="beforeLeave" @leave="leave" >
        <h1 v-if="ativo">Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name: "TransitionHooks",
    data() {
        return {
            ativo: false
        };
    },
    methods: {
        enter() {
            console.log("Olá :) hehe");
        },
        beforeEnter() {
            console.log("Seja bem vindo :)")
        },
        beforeLeave() {
            console.log("Tchau :C Not hehe")
        },
        leave() {
            console.log("Até mais :(")
        }
    }

}
</script>

<style>

</style>