<template>
  <div class="modal">
    <button>Fechar</button>
    <slot :user="user"></slot>
  </div>
</template>

<script>
export default {
    name: "ModalAlerta",
    data() {
        return{
            user: {
                name: "Andŕe"
            }
        }
    }
}
</script>

<style>

</style>