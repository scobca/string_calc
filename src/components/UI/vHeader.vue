<template>
  <header class="header_container container">
    <div class="logo" @click="this.$router.push('/')">
      <img src="@/assets/img/icon.svg" alt="" class="logo_icon">
      <p class="logo_label">Рассчитай сам!</p>
    </div>
    <div class="list">
      <ul class="buttons">
        <li class="header_button">
          <router-link to="/"> Главная</router-link>
        </li>
        <li class="header_button">
          <router-link to="/about"> О проекте</router-link>
        </li>
        <li class="header_button_select">
          <div class="button" v-if="$route.name !== 'about'">
            <v-button @select="$emit('select')"/>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import VButton from "@/components/UI/vButton.vue";

export default {
  name: "vHeader",
  components: {VButton},
  data() {
    return {
      categories: [
        {
          type: 0,
          name: 'Выбрать',
          active: true
        },
        {
          type: 1,
          name: 'Крючок',
          active: false
        },
        {
          type: 2,
          name: 'Спицы',
          active: false
        }
      ],
      vRoute: '',
    }
  },
  methods: {
    updateTestsList(n) {
      this.categories = this.categories.map(el => {
        let active = false;
        if (el.type === n.type)
          active = true;
        return {
          ...el,
          active
        }
      })
    },
  }
}

</script>

<style scoped>

.logo_icon {
  width: 6%;
  cursor: pointer;
}

.logo {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}

.logo_label {
  cursor: pointer;
}

.container {
  min-height: 4rem;
  padding: 0 1.5rem 0 1.5rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  background-color: var(--header-bg-color);
  width: 90vw;
  margin-top: 0.75rem;
  border-radius: 1rem;
}

.logo {
  color: var(--header-logo);
  font-size: 1.5rem;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  max-width: 60%;
  height: 90%;
}

.buttons {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  align-content: center;
  gap: 3rem;
  list-style: none;
  cursor: pointer;
  font-size: 1.1rem;
}

.header_button, .header_button_select {
  height: 90%;
  border-bottom: 0.15rem solid transparent;
  box-sizing: border-box;
  transition-duration: .5s;
  font-size: 1rem;
}

.header_button:hover {
  border-bottom: .15rem solid #B275FF;
}
</style>