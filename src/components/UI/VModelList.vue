<template>
    <section class="container">
        <div class="container">
            <div class="settings_container">
                <div class="switer" v-if="this.typeIndex === 0">
                    Не выбран тип изделия
                </div>

                <div class="product" v-else>
                    Тип изделия: {{nameType}}
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