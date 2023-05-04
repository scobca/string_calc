<template>
    <div class="button">
        <button class="calculate">
            Посчитать!
        </button>
    </div>
</template>

<script>
export default {
    name: "vButtonCalculate",
    data() {
        return {
            activeHook: {
                type: Boolean,
                default: true
            },
            activeNeedle: {
                type: Boolean,
                default: false
            },
            hookClass: 'hook_active',
            needleClass: 'needle'
        }
    },
    methods: {
        updateActiveHook() {
            if (this.activeHook === false) {
                this.activeHook = true
                this.hookClass = 'hook';
                this.needleClass = 'needle_active'
            }
            else {
                this.hookClass = 'hook_active';
                this.needleClass = 'needle'
            }
        },
        updateActiveNeedle() {
            if (this.activeNeedle === false) {
                this.activeNeedle = true
                this.hookClass = 'hook_active';
                this.needleClass = 'needle'
            }
            else {
                this.hookClass = 'hook';
                this.needleClass = 'needle_active'
            }
        }
    }
}
</script>

<style scoped>
.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}



.calculate {
    background: linear-gradient(200.42deg, #B275FF 13.57%, #DD7EFF 50.35%);
    min-width: 20rem;
    min-height: 3rem;
    border: .15rem solid white;
    border-radius: .5rem;
    font-size: 1rem;
}
</style>