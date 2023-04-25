<template>
   <section class="section">
       <div class="container">
           <h2 class="header">
               Калькулятор материала для вязания крючком
           </h2>

           <div class="common_model">

              <div class="settings">
                  <div class="type">
                      <v-select class="selector"
                                :selects="product"
                                @select="update"
                      />
                  </div>

                  <div class="type" v-if="this.selectedProductName !== 'Выбрать изделие'">
                      <v-data-settings v-if="!lengthOff"
                                       v-model="length"
                                       :placeholder="'Введите длину рукава'"
                                       v-model.trim="length"
                                       id="input"
                      />
                  </div>
              </div>


               <div class="result">
                   <v-model-list class="settings_model"
                                 :type-index="selectedProductIndex"
                                 :name-type="selectedProductName"
                                 :length="length"
                   />
               </div>
           </div>
       </div>
   </section>
</template>

<script>

import VModelList from "@/components/UI/VModelList.vue";
import VSelect from "@/components/UI/vSelect.vue";
import VDataSettings from "@/components/UI/vDataSettings.vue";

export default {
    name: "HookMethodView",
    components: {VDataSettings, VSelect, VModelList},
    props: {
        selects: {
            type: Array,
            default: () => []
        },
    },
    data () {
        return {
            selectedProductIndex: 0,
            selectedProductName: 'NaN',
            lengthOff: {
                type: Boolean,
                default: false
            },
            length: '',
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
            ],
            length_off: {
                name: ['Свитер', 'Жакет', 'Кардиган']
            }
        }
    },
    methods: {
        update(n) {
            this.product = this.product.map(el => {
                let active = false;
                if (el.type === n.type)
                    active = true;
                    this.selectedProductIndex = n.type
                    this.selectedProductName = n.name

                this.lengthOff = !this.length_off.name.includes(this.selectedProductName);

                return {
                    ...el,
                    active
                }
            })
            console.log(this.selectedProductIndex);
            console.log(this.selectedProductName);
        }
    },
    created() {
        this.selectedProductName = 'Выбрать изделие'
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
    color: var(--headers-color);
}

.selector {
    padding: .3rem;
}

.type {
    border: .15rem solid var(--border-color);
    border-radius: .5rem;
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.settings {
    padding: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20rem;
    gap: 2rem;
}

.result {
    padding: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 30rem;

    border: 3px solid var(--results-border-color);
    border-radius: .5rem;
}

#input {
    background-color: transparent;
    border: none;
    text-align: center;
    height: 2.3rem;
    font-size: 1rem;
    min-width: 19rem;
}

#input:focus {
    outline: none;
}

</style>