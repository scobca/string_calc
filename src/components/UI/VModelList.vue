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
                    <p v-if="this.items_width.width.includes(this.item)"> Ширина: {{cWidth}} </p>
                    <p v-if="this.items_width.breastWidth.includes(this.item)"> Объем груди: {{cWidth}} </p>
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
        },
        item: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            items_width: {
                width: ['Шарф'],
                breastWidth: ['Свитер', 'Жакет', 'Жилет', 'Кардиган', 'Топ', 'Плед', 'Пуловер']
            }
        }
    },
    methods: {}
}
</script>

<style scoped>
.container {
    min-width: 15rem;
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
    border: .15rem solid white;
    border-radius: .5rem;
    /*padding: .35rem;*/
    padding: 0;
    min-width: 20rem;
    min-height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

#product {
    padding: 0;
}
</style>