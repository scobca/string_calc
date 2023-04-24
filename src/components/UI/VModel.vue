<template>
   <section class="section">
       <div class="container">
           <h2 class="header">
               Калькулятор материала для вязания крючком
           </h2>

           <div class="common_model">
              <div class="settings">
                  <v-select class="selector"
                            :selects="product"
                            @select="update"
                  />
              </div>

               <div class="result">
                   <v-model-list class="settings_model"
                                 :type-index="selectedProduct"
                   />
               </div>
           </div>
       </div>
   </section>
</template>

<script>

import VModelList from "@/components/UI/VModelList.vue";
import VSelect from "@/components/UI/vSelect.vue";

export default {
    name: "HookMethodView",
    components: {VSelect, VModelList},
    props: {
        selects: {
            type: Array,
            default: () => []
        }
    },
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
        update(n) {
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
.section {
    margin: .5rem 2rem 2rem 2rem;
    border: 1px solid red;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.common_model {
    border: 3px solid white;
    border-radius: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    min-width: 80vw;
}

.header {
    font-size: 2rem;
    color: var(--header-logo);
}

.selector {
    border: .15rem solid var(--border-color);
    border-radius: .5rem;
    padding: .3rem;
}

.result {
    padding: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

</style>