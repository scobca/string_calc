<template>
    <v-header/>
    <router-view/>
</template>

<script>

import VHeader from "@/components/UI/vHeader.vue";
import HomeView from "@/views/HomeView.vue";

export default {
  name: 'App',
  components: {
      HomeView,
      VHeader
  }
}
</script>

<style>

:root {
    --bg-light: hsl(0, 0%, 100%);
    --bg-dark: hsl(0, 0%, 20%);

    --header-light: hsl(60, 1%, 12%);
    --header-dark: hsl(0, 0%, 90%);
    --header-logo-light: hsl(177, 59%, 35%);
    --header-logo-dark: hsl(177, 59%, 42%);
    --header-bg-light: var(--vt-c-white-mute);
    --header-bg-dark: var(--vt-c-black-mute);

    --light: hsl(0, 0%, 100%);
    --dark: hsla(0, 0%, 24%, 0.66);
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: var(--bg-dark);
        --text-color: var(--light);

        --header-text: var(--header-dark);
        --header-logo: var(--header-logo-dark);
        --header-bg-color: var(--header-bg-dark);
    }

    *,
    *::before,
    *::after {
        color: var(--light);
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --bg-color: var(--bg-light);
        --text-color: var(--dark);

        --header-text: var(--header-light);
        --header-logo: var(--header-logo-light);
        --header-bg-color: var(--header-bg-light);
    }

    *,
    *::before,
    *::after {
        color: var(--dark);
    }
}
</style>
