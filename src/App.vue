<template>
  <router-view/>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  name: "app",
})
export default class App extends Vue {}
</script>

<style>

</style>
