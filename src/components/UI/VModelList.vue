<template>
    <section class="container">
        <div class="container">
            <div class="settings_container">
                <div class="product" v-if="this.typeIndex === 0" id="product">
                    Не выбран тип изделия
                </div>
                <div class="product" v-else id="product">
                    Тип изделия: {{nameType}}
                </div>

                <div class="product" v-if="clMeans">
                    Длина: {{cLength}}
                </div>

                <div class="product" v-if="cwMeans">
                    Ширина: {{cWidth}}
                </div>

                <div class="product" v-if="lMeans">
                    Длина рукава: {{length}}
                </div>

                <div class="product" v-if="collarMeans">
                    Высота воротника: {{collarWidth}}
                </div>

                <div class="product" v-if="vHeadMeans">
                    Объем головы: {{vHead}}
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
        cLength: {
            default: 0
        },
        cWidth: {
            default: 0
        },
        collarWidth: {
            default: 0
        },
        vHead: {
            default: 0
        },
        selects: {
            type: Array,
            default: () => []
        },
        lMeans: {
            type: Boolean,
            default: false
        },
        clMeans: {
            type: Boolean,
            default: false
        },
        cwMeans: {
            type: Boolean,
            default: false
        },
        collarMeans: {
            type: Boolean,
            default: false
        },
        vHeadMeans: {
            type: Boolean,
            default: false
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

.settings_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.product {
    border: 2px solid red;
    border-radius: .5rem;
    /*padding: .35rem;*/
    padding: 0;
    min-width: 15rem;
    min-height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

#product {
    padding: 0;
}
</style>