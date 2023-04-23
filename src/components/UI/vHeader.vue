<template>
    <header class="header_container container">
            <div class="header_logo"> Рассчитай сам! </div>
            <div class="header_btt">
                <ul class="buttons">
                    <li class="header-button">
                        <router-link to="/"> Главная </router-link>
                    </li>
                    <li class="header-button">
                        <v-select
                            :selects="categories"
                            class="header_button"
                            @select="updateTestsList"
                        />
                    </li>
                </ul>
            </div>
    </header>
</template>

<script>

import VSelect from "@/components/UI/vSelect.vue";

export default {
    name: "vHeader",
    components: {VSelect},
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
            vRoute: ''
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

.header_logo {
    color: var(--header-logo);
    font-size: 1.5rem;
}

.buttons {
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    list-style: none;
    cursor: pointer;
    font-size: 1.1rem;
}

.header_btt {
    display: flex;
    flex-direction: row;
    justify-content: left;
    max-width: 15rem;
}

.header_button {
    height: 2rem;
    color: var(--header-logo);
}

.header_button > router-link:after {
    color: white !important;
}

</style>