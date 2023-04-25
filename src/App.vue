<template>
    <v-header/>
<!--    <router-view/>-->
    <v-model :selects="product" v-if="this"/>
</template>

<script>

import VHeader from "@/components/UI/vHeader.vue";
import VModel from "@/components/UI/VModel.vue";
// import VModelList from "@/components/UI/VModelList.vue";

export default {
  name: 'App',
  components: {
      VModel,
      VHeader
  },
    data () {
        return {
            selectedProduct: 0,
            product: [
                {
                    type: 0,
                    name: 'Выбрать изделие',
                    active: true
                },
                {
                    type: 1,
                    name: 'Свитер',
                    active: false
                },
                {
                    type: 2,
                    name: 'Жакет',
                    active: false
                },
                {
                    type: 3,
                    name: 'Пуловер',
                    active: false
                },
                {
                    type: 4,
                    name: 'Жилет',
                    active: false
                },
                {
                    type: 5,
                    name: 'Кардиган',
                    active: false
                },
                {
                    type: 6,
                    name: 'Шапка',
                    active: false
                },
                {
                    type: 7,
                    name: 'Шарф',
                    active: false
                },
                {
                    type: 8,
                    name: 'Топ',
                    active: false
                },
                {
                    type: 9,
                    name: 'Плед',
                    active: false
                }
            ]
        }
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
    --headers-color: hsl(169, 71%, 45%);

    --light: hsl(0, 0%, 100%);
    --dark: hsla(0, 0%, 24%, 0.66);

    --border-color: hsl(37, 83%, 38%);
    --results-border-color: hsl(169, 71%, 45%);
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: var(--bg-dark);
        --text-color: var(--light);

        --header-logo: var(--header-logo-dark);
        --headers-color: hsl(169, 71%, 45%);
        --header-bg-color: var(--header-bg-dark);

        --border-color: hsl(37, 83%, 38%);
        --results-border-color: hsl(169, 71%, 45%);
    }

    *,
    *::before,
    *::after {
        color: var(--text-color);
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --bg-color: var(--bg-light);
        --text-color: var(--dark);

        --header-logo: var(--header-logo-light);
        --headers-color: hsl(169, 71%, 45%);
        --header-bg-color: var(--header-bg-light);

        --border-color: hsl(37, 83%, 38%);
        --results-border-color: hsl(169, 71%, 45%)
    }

    *,
    *::before,
    *::after {
        color: var(--text-color);
    }
}
</style>
