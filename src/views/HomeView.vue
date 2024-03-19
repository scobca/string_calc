<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'HomeView',
})
export default class HomeView extends Vue {

}
</script>

<template>
  <div class="container">

  </div>
</template>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
  }
</style>