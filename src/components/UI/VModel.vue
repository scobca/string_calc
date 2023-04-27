<template>
   <section class="section">
       <div class="container">
           <h2 class="header" id='mHeader' v-if="$route.name === 'home'">
               Калькулятор материала для вязания <span class="header" id="header"> крючком </span>
           </h2>

           <h2 class="header" id="mHeader" v-if="$route.name === 'needles'">
               Калькулятор материала для вязания <span class="header" id="header"> спицами </span>
           </h2>

           <div class="common_model">

              <div class="settings">
                  <div class="type" id="type_selector">
                      <v-select class="selector length"
                                :selects="product"
                                @select="update"
                      />
                  </div>

                  <div class="type" v-if="this.selectedProductName !== 'Выбрать изделие'">
                      <v-data-settings v-if="this.params_off.cLength.includes(this.selectedProductName)"
                                       v-model="cLength"
                                       :placeholder="'Введите длину (см)'"
                                       v-model.trim="cLength"
                                       id="input"
                                       type="number"
                      />
                      <v-data-settings v-if="this.params_off.cWidth.includes(this.selectedProductName)"
                                       v-model="cWidth"
                                       :placeholder="'Введите ширину (см)'"
                                       v-model.trim="cWidth"
                                       id="input"
                                       type="number"
                      />
                      <v-data-settings v-if="this.params_off.length.includes(this.selectedProductName)"
                                       v-model="length"
                                       :placeholder="'Введите длину рукава (см)'"
                                       v-model.trim="length"
                                       id="input"
                                       type="number"
                      />
                      <v-data-settings v-if="this.params_off.collarWidth.includes(this.selectedProductName)"
                                       v-model="collarWidth"
                                       :placeholder="'Введите высоту воротника (см)'"
                                       v-model.trim="collarWidth"
                                       id="input"
                                       type="number"
                      />
                      <v-data-settings v-if="this.params_off.vHead.includes(this.selectedProductName)"
                                       v-model="vHead"
                                       :placeholder="'Введите объем головы (см3)'"
                                       v-model.trim="vHead"
                                       id="input"
                                       type="number"
                      />

                  </div>
              </div>


               <div class="result">
                   <v-model-list class="settings_model"
                                 :type-index="selectedProductIndex"
                                 :name-type="selectedProductName"
                                 :l-means="lMeans"
                                 :cl-means="clMeans"
                                 :cw-means="cwMeans"
                                 :collar-means="collarMeans"
                                 :v-head-means="vHeadMeans"
                                 :length="length"
                                 :cLength="cLength"
                                 :c-width="cWidth"
                                 :collar-width="collarWidth"
                                 :v-head="vHead"
                   />
               </div>
           </div>
       </div>
       <div class="button">
           <v-button-calculate v-if="this.selectedProductName !== 'Выбрать изделие'"/>
       </div>   </section>
</template>

<script>

import VModelList from "@/components/UI/VModelList.vue";
import VSelect from "@/components/UI/vSelect.vue";
import VDataSettings from "@/components/UI/vDataSettings.vue";
import VButtonCalculate from "@/components/UI/vButtonCalculate.vue";

export default {
    name: "HookMethodView",
    components: {VButtonCalculate, VDataSettings, VSelect, VModelList},
    emits: ('select'),
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

            length: '',
            cLength: '',
            cWidth: '',
            collarWidth: '',
            vHead: '',

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
            params_off: {
                length: ['Свитер', 'Жакет', 'Кардиган'],
                cLength: ['Свитер', 'Жакет', 'Жилет', 'Кардиган', 'Шарф', 'Топ', 'Плед', 'Пуловер', 'Шапка'],
                cWidth: ['Свитер', 'Жакет', 'Жилет', 'Кардиган', 'Шарф', 'Топ', 'Плед', 'Пуловер'],
                collarWidth: ['Пуловер'],
                vHead: ['Шапка']
            },

            lMeans: false,
            clMeans: false,
            cwMeans: false,
            collarMeans: false,
            vHeadMeans: false
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

                this.lMeans = this.params_off.length.includes(this.selectedProductName);
                this.clMeans = this.params_off.cLength.includes(this.selectedProductName);
                this.cwMeans = this.params_off.cWidth.includes(this.selectedProductName);
                this.collarMeans = this.params_off.collarWidth.includes(this.selectedProductName);
                this.vHeadMeans = this.params_off.vHead.includes(this.selectedProductName);

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
    },
}
</script>

<style scoped>
.section {
    margin: .5rem 2rem 2rem 2rem;
    /*border: 1px solid red;*/
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0;
}

.common_model {
    /*border: 3px solid white;*/
    border-radius: 1rem;
    padding: 1rem;

    display: flex;
    flex-direction: row;
    /*justify-content: space-between;*/
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    min-width: 80vw;
    gap: 6rem;
}

.header {
    font-size: 2rem;
    color: var(--headers-color);
}

.selector {
    /*padding: .3rem;*/
    padding: 0;
}


.type {
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

#type_selector {
    border: .15rem solid white;
    border-radius: .5rem;
    min-height: 3rem;
}

.settings {
    /*padding: .3rem;*/
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20rem;
    gap: 1rem;
}

.result {
    /*padding: .3rem;*/
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 20rem;

    /*border: 3px solid var(--results-border-color);*/
    border-radius: .5rem;
}

#input {
    background-color: transparent;
    border: .15rem solid white;
    border-radius: .5rem;
    text-align: center;
    height: 2.3rem;
    font-size: 1rem;
    min-width: 20rem;
    min-height: 3rem;
}

#input:focus {
    outline: none;
}

#header {
    border-bottom: .15rem solid transparent;
    transition-duration: .5s;
}

#mHeader:hover #header {
    border-bottom: .15rem solid #B275FF;
}

</style>