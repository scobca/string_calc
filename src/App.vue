<template>
    <v-header/>
    <router-view/>
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
    --bg-dark: hsl(0, 0%, 35%);

    --header-light: hsl(0, 0%, 90%);
    --header-dark: hsl(60, 1%, 12%);

    --header-logo: hsl(169, 57%, 73%);

    --light: hsl(0, 0%, 100%);
}
</style>
