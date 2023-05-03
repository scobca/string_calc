<template>
    <header class="header_container container">
            <div class="logo"> Рассчитай сам! </div>
            <div class="list">
                <ul class="buttons">
                    <li class="header_button">
                        <router-link to="/"> Главная </router-link>
                    </li>
                    <li class="header_button">
                        <router-link to="/about"> О проекте </router-link>
                    </li>
                    <li class="header_button_select">
                        <div class="button" v-if="$route.name !== 'about'">
                            <v-button @select="$emit('select')"/>
                        </div>
                    </li>
                </ul>
            </div>
    </header>
</template>

<script>

// import VSelect from "@/components/UI/vSelect.vue";

import VButton from "@/components/UI/vButton.vue";

export default {
    name: "vHeader",
    components: {VButton},
    data() {
        return {
            categories: [
                {
                    type: 0,
                    name: 'Выбрать',
                    active: true
                },
                {
                    type: 1,
                    name: 'Крючок',
                    active: false
                },
                {
                    type: 2,
                    name: 'Спицы',
                    active: false
                }
            ],
            vRoute: '',
        }
    },
    methods: {
        updateTestsList(n) {
            this.categories = this.categories.map(el => {
                let active = false;
                if (el.type === n.type)
                    active = true;
                return {
                    ...el,
                    active
                }
            })
        },
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

    background-color: var(--header-bg-color);
}

.logo {
    color: var(--header-logo);
    font-size: 1.5rem;
}

.list {
    display: flex;
    flex-direction: row;
    justify-content: left;
    max-width: 40rem;
}

.buttons {
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
    list-style: none;
    cursor: pointer;
    font-size: 1.1rem;
}

.header_button, .header_button_select {
    height: 2rem;
    border-bottom: 0.15rem solid transparent;
    box-sizing: border-box;
    transition-duration: .5s;
}

.header_button:hover {
    border-bottom: .15rem solid #B275FF;
}
</style>