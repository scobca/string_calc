<template>
    <input
            v-if="type === 'number'"
            @input="$emit('update:modelValue', $event.target.value)"
            class="input"
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            :disabled="disabled"
            min="0"
    >
    <input
            v-else
            @input="$emit('update:modelValue', $event.target.value)"
            class="input"
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            :disabled="disabled"
    >
</template>

<script>
export default {
    name: "YInput",
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        max: {
            default: 0
        },
        min: {
            default: 0
        },
        disabled: {
            default: false,
        },
        modelValue: [String, Number]
    },
}
</script>

<style scoped>
.input {
    background: transparent;
    border: none;
    /*height: 2rem;*/
    text-align: center;
    transition: all .3s ease-in-out;
}
.input:focus {
    background: transparent;
    border: none;
    height: 2rem;
    text-align: center;
    transition: all .3s ease-in-out;
}



::placeholder {
    font-style: italic;
    color: #bdbdbd;
}
</style>
