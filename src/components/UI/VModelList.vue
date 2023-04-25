<template>
    <section class="container">
        <div class="container">
            <p class="result">
                Результат
            </p>

            <div class="settings_container">
                <div class="switer" v-if="this.typeIndex === 0">
                    Не выбран тип изделия
                </div>
                <div class="product" v-else>
                    Тип изделия: {{nameType}}
                </div>

                <div class="product" v-if="length > 0">
                    Длина рукава: {{length}}
                </div>

            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "VModelList",
    components: {},
    props: {
        typeIndex: {
            default: 0
        },
        nameType: {
            default: ''
        },
        length: {
            default: 0
        },
        selects: {
            type: Array,
            default: () => []
        }
    },
    methods: {}
}
</script>

<style scoped>
.container {
    min-width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.result {
    width: 10rem    ;
    font-size: 1.45rem;
    text-align: center;
    border-bottom: 0.1rem solid var(--results-border-color);
    /*border-top: 2px solid var(--text-color);*/
    margin-bottom: 1rem;
}
</style>