<template>
    <section class="container">
        <div class="container">
            <h2 class="header">
                Калькулятор материала для вязания крючком
            </h2>
            <v-select class="product"
                      :selects="product"
                      @select="updateProductList"/>

            <div class="settings_container">
                <div class="switer" v-if="this.selectedProduct === 0">
                    Выберите тип изделия
                </div>

                <div class="switer" v-if="this.selectedProduct === 1">
                    Свитер
                </div>

                <div class="switer" v-if="this.selectedProduct === 2">
                    Жакет
                </div>

                <div class="switer" v-if="this.selectedProduct === 3">
                    Пуловер
                </div>

                <div class="switer" v-if="this.selectedProduct === 4">
                    Жилет
                </div>

                <div class="switer" v-if="this.selectedProduct === 3">
                    Кардиган
                </div>

                <div class="switer" v-if="this.selectedProduct === 4">
                    Шапка
                </div>

                <div class="switer" v-if="this.selectedProduct === 3">
                    Топ
                </div>

                <div class="switer" v-if="this.selectedProduct === 4">
                    Плед
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VSelect from "@/components/UI/vSelect.vue";

export default {
    name: "HookMethodView",
    components: {VSelect},
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
    },
    methods: {
        updateProductList(n) {
            this.product = this.product.map(el => {
                let active = false;
                if (el.type === n.type)
                    active = true;
                    this.selectedProduct = n.type

                return {
                    ...el,
                    active
                }
            })
            console.log(this.selectedProduct);
        }
    }
}
</script>

<style scoped>
section {
    margin-top: 2rem;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.product {
    scale: 120%;
}

.settings_container {
    z-index: -1;
}
</style>