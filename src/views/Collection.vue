<script>

import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import CollectionContent from '../components/Collection-content.vue';

export default {
  components: {
    Header,
    Menu,
    CollectionContent,
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
          <CollectionContent/>
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

</style>