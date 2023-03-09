<script>

import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import MainSwiper from '../components/Main-swiper.vue';
import Collections from '../components/Collections.vue';
import Footer from '../components/Footer.vue';
import Balance from '../views/Balance.vue';
import Collection from '../views/Collection.vue';

export default {
  components: {
    Header,
    Menu,
    MainSwiper,
    Collections,
    Footer,
    Balance,
    Collection
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
          <MainSwiper />
        </section>
      </div>
      <Collections />
    </div>
    <Footer />
  </div>
</template>