<template>
    <article class="select">
        <p class="button select__button" @click="open">
            {{ activeSelect }}
            <img class="button__icon" src="@/assets/img/select_arrow.svg" alt="">
        </p>
        <ul v-if="list.show" class="select__list">
            <li v-for="el in notActiveSelects" :key="`${el}`" @click="select(el)">
                <p class="list__item button_active">{{ el.name }}</p>
            </li>
        </ul>
    </article>
</template>

<script>
export default {
    name: "vSelect",
    props: {
        selects: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            list: {
                show: false
            }
        }
    },
    methods: {
        select(el) {
            this.$emit('select', el)
            this.list.show = false
        },
        open() {
            this.list.show = !this.list.show;
            console.log(this.list.show);
        }
    },
    computed: {
        activeSelect() {
            if (this.selects.length > 0) {
                const el = this.selects.filter(el => el.active)
                if (el.length > 0) {
                    return el[0].name
                } else {
                    return 'Undefined'
                }
            } else {
                return 'Undefined'
            }
        },
        notActiveSelects() {
            if (this.selects.length > 0) {
                const el = this.selects.filter(el => !el.active)

                if (el.length > 0) {
                    return el
                } else {
                    return [{name: 'Undefined'}]
                }
            } else {
                return [{name: 'Undefined'}]
            }
        }
    }
}
</script>

<style scoped>

.select{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -.1rem;
}

.button {
    cursor: pointer;
    align-self: end;
    position: relative;
    color: var(--light);
    font-size: 1rem;
}

.button__icon {
    width: 1rem;
    padding-top: .2rem;
    margin-left: .35rem;
    height: .7rem;
}

.select__button {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: min-content;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--text-color);
}

.select__list {
    position: absolute;
    background: rgba(255, 255, 255, 0.18);
    box-shadow: -4px 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
    border-radius: .85rem;
    list-style: none;
    overflow: hidden;
    min-width: 10rem;
    margin-top: 10rem;
}

.list__item {
    width: 100%;
    padding: 1rem;
    color: var(--text-color);
    font-size: 1rem;
    text-align: left;
}

.list__item:hover {
    background: linear-gradient(130.42deg, #B27511 13.57%, #DD7E11 98.35%);
}

select {
    color: var(--text-color);
}

</style>