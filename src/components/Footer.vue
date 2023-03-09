<script>

export default {
  name: 'Footer',
  data() {
    return {

    }
  }
}

</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <p class="footer__text">
          Copyright @ 2023 Tribe Dragonz. All rights reserved.
        </p>
        <div class="footer__row">
          <a class="footer__row-link" href="https://twitter.com/TribeDragonz" target="_blank">
            <img src="../../public/img/twitter-icon.png" alt="twitter">
          </a>
          <a class="footer__row-link" href="https://discord.gg/tribedragonz" target="_blank">
            <img src="../../public/img/discord-icon.png" alt="twitter">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/style.scss';
.footer {
  @include adaptiv-value("padding-top", 115, 40, 1);
  @include adaptiv-value("padding-bottom", 115, 40, 1);

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 23px;
  }

  &__text {
    @include adaptiv-value("font-size", 18, 13, 1);
    @include adaptiv-value("line-height", 25, 18, 1);
    text-align: center;
    color: #000;
  }

  &__row {
    display: flex;
    align-items: center;
    @include adaptiv-value("gap", 25, 15, 1);
  }

  &__row-link {
    img {
      transition: filter 0.3s;
    }
    &:hover {
      img {
        filter: contrast(0.1);
      }
    }
  }

  &__row-link:nth-child(1) {
    img {
      @include adaptiv-value("width", 49, 30, 1);
    }
  }
  &__row-link:nth-child(2) {
    img {
      @include adaptiv-value("width", 49, 30, 1);
    }
  }
}
</style>