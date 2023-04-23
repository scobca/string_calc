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
                <div class="switer">

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
            product: [
                {
                    type: 0,
                    name: 'Выбрать изделие',
                    active: true
                },
                {
                    type: 1,
                    name: 'switer',
                    active: false
                },
                {
                    type: 2,
                    name: 'jacket',
                    active: false
                },
                {
                    type: 3,
                    name: 'pulover',
                    active: false
                },
                {
                    type: 4,
                    name: 'zilet',
                    active: false
                },
                {
                    type: 5,
                    name: 'cardigan',
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
</style>