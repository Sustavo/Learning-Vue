<template>
  <div class="modal">
    <header>
        <slot name="header"></slot>
    </header>
    <section>
        <slot>Fallback se não tiver Conteúdo</slot>
    </section>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
    name: "ModalAlerta"
};
</script>

<style>

    header {
        border-bottom: 2px solid;
    }

    section {
        margin: 20px;
    }

    footer {
        border-top: 2px solid;
    }

</style>