<template>
    <v-header/>
</template>

<script>

import VHeader from "@/components/UI/vHeader.vue";

export default {
  name: 'App',
  components: {
      VHeader

  }
}
</script>

<style>

:root {
    --bg-light: hsl(0, 0%, 100%);
    --bg-dark: hsl(0, 0%, 29%);

    --header-light: hsl(0, 0%, 90%);
    --header-dark: hsl(60, 1%, 27%);
}


@media (prefers-color-scheme: light) {
    body {
        background-color: var(--bg-light);
    }
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: var(--bg-light);
    }
}
</style>
