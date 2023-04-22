<template>
    <header class="header_container container">
            <div class="header_logo"> Рассчитай сам! </div>
            <div class="header_btt">
                <ul class="header_btt_container">
                    <li class="hBtt">
                        <router-link to="/"> Главная </router-link>
                    </li>
                </ul>
            </div>
    </header>
</template>

<script>

export default {
    name: "vHeader",
    components: {},
    data() {

    },
    methods: {
        checkThemeAndChange() {
            console.log('123');
        }
    }
}

</script>

<style scoped>

.container {
    height: 4rem;
    width: 100vw;
    padding: 0 1.5rem 0 1.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header_logo {
    color: var(--header-logo);
    font-size: 1.5rem;
}

.header_btt_container {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    list-style: none;

    font-size: 1.1rem;
}

/*y-select {*/
/*    background: linear-gradient(200.42deg, #B275FF 13.57%, #DD7EFF 98.35%);*/
/*}*/


@media (prefers-color-scheme: dark) {
    .container {
        background-color: var(--header-dark);
    }
}

</style>