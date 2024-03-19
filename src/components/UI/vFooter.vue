<template>
  <div class="container">
    <p class="name">Гимназия 85</p>
    <p class="name">Санкт-Петербург | 2023-2024</p>
  </div>
</template>

<script>
 export default {
   name: 'vFooter',
 }
</script>

<style scoped>
.container {
  background-color: var(--header-bg-color);
  width: 90vw;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 0.75rem;
  border-radius: 1rem;
  padding: 0 2rem;
}
</style>