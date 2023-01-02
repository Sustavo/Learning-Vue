<template>
    <div>
        <button @click="ativo = !ativo">Ativar</button>
        <transition name="fade">
            <h1 v-if="ativo" >Serviços</h1>
        </transition>
    </div>
</template> 

<script>
    export default {
        name: "TransitionAnimation",
        data() {
            return {
                ativo: false,
            }
        }

    }
</script>

<style>
/* 
v-enter (adicionada antes do elemento ser inserido)
v-enter-active (adicionada durante a animação)
v-enter-to (adicionada assim que a animação termina)
v-leave (adicionada assim que o elemento começa a sair)
v-leave-active (adicionada enquanto o elemento está saindo)
v-leave-to (adicionada quando o elemento saiu)

São classes adicionadas pelos vue.
O nome inicial (v) depende do atributo name
*/

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>