<template>
    <div class="button">
        <router-link to="/">
            <button :class="hookClass" @click="updateActiveHook">
                Вязание крючком
            </button>
        </router-link>
        <router-link to="/needles">
            <button :class="needleClass" @click="updateActiveNeedle">
                Вязание спицами
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "vButton",
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

.hook, .hook_active {
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}

.needle, .needle_active {
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
}

.hook, .needle, .hook_active, .needle_active {
    padding: 0 .5rem 0 .5rem;
    min-height: 2.3rem;
    min-width: 10rem;
    border: none;
    font-size: 1.1rem;
    color: var(--text-color);
}

.hook_active, .needle_active {
    background: linear-gradient(200.42deg, #B275FF 13.57%, #DD7EFF 98.35%);
}

.hook, .needle {
    background-color: transparent;
    border: .05rem solid #B275FF ;
}
</style>