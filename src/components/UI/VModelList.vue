<template>
    <section class="container">
        <div class="container">
            <div class="settings_container">
                <div class="switer" v-if="this.typeIndex === 0">
                    Выберите тип изделия
                </div>

                <div class="switer" v-if="this.typeIndex === 1">
                    Свитер
                </div>

                <div class="switer" v-if="this.typeIndex === 2">
                    Жакет
                </div>

                <div class="switer" v-if="this.typeIndex === 3">
                    Пуловер
                </div>

                <div class="switer" v-if="this.typeIndex === 4">
                    Жилет
                </div>

                <div class="switer" v-if="this.typeIndex === 5">
                    Кардиган
                </div>

                <div class="switer" v-if="this.typeIndex === 6">
                    Шапка
                </div>

                <div class="switer" v-if="this.typeIndex === 7">
                    Топ
                </div>

                <div class="switer" v-if="this.typeIndex === 8">
                    Плед
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
        selects: {
            type: Array,
            default: () => []
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>