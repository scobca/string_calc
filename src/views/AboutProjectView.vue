<template>
  <div class="container">
    <section class="introducing"
             data-aos="fade-up"
             data-aos-duration="1300"
    >

      <div class="header">
        <h2> Добро пожаловать на страницу проекта "Рассчитай сам"</h2>
      </div>

      <div class="post-header">
        <h3 class="subheader"> Наша цель - уменьшить количество ошибок при подсчете и облегчить процесс вязания! </h3>
      </div>

    </section>
    <section class="body"
             data-aos="fade-up"
             data-aos-duration="1300"
             data-aos-delay="500"
    >

      <div class="aboutPrg block">
        <h2 class="header_body">О проекте</h2>
        Для людей, увлекающихся вязанием, не секрет, что для полноценного изделия требуется немало материала,
        который часто бывает дорогим. Поэтому, чтобы сэкономить время и деньги существуют онлайн-калькуляторы,
        где рассчитывается нужное количество ниток. Но они зачастую ограничены в персонализации для подсчёта,
        отсутствуют многие популярные категории изделий, нет различий между вязанием крючком и спицами. Вследствие
        этого, мой проект решает проблему отсутствия современных инструментов расчёта для вязания не в промышленном
        масштабе.
      </div>

      <div class="research block">
        <h2 class="header_body">Актуальность проекта</h2>
        Работа на избранную тему является актуальной в связи с отсутствием современных, удобных и персонализируемых
        инструментов подсчёта материала для вязания не в промышленном масштабе.
        Все, кто когда-либо занимался изготовлением крупных изделий рано или поздно столкнётся с данной проблемой.
        В сети множество онлайн-калькуляторов, но ни один не предоставляет большого спектра различных параметров
        настройки.
      </div>

    </section>
  </div>
</template>

<script>

import AOS from 'aos'

AOS.init();

export default {
  name: "AboutProjectView"
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 3rem;
}

.introducing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.header {
  color: var(--text-color);
  font-size: 1.5rem;
}

.post-header > h3 {
  color: #B275FF !important;
  font-size: 1.1rem;
}

.body {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  margin-top: 3rem;
}

.header_body {
  margin-bottom: 1rem;
  color: #B275FF;
  text-align: center;
}

.aboutPrg, .research {
  text-align: justify;
  border: 3px solid #B275FF;
  border-radius: .5rem;
  padding: 1rem;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  max-width: 40%;
  min-height: 24rem;
}

.subheader {
  font-size: 1.35rem !important;
}
</style>