<script>

import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import BenefitsContent from '../components/Benefits-content.vue';

export default {
  components: {
    Header,
    Menu,
    BenefitsContent,
  },
  data() {
    return {

    }
  }
}

</script>

<template>
  <div class="big-wrapper">
    <Header />
    <div class="main">
      <div class="container">
        <section class="main__top main-top">
          <Menu />
          <BenefitsContent/>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/style.scss';

.benefits-body {
    .main-top {
        margin-bottom: 0;
        gap: unset;
    }
}

.main {
}

.main-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

</style>