<script>

export default {

  data() {
    return {

    }
  },
}

</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import './assets/scss/style.scss';

.main {}

.main-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @include adaptiv-value("gap", 20, 20, 1);
}

// // addBlackThem 
.body--menu {
  overflow: hidden;
}

.body--dark {
  background: #1C1C1C;

  // 

  .custom-select {
    position: relative;
    width: 140px;
    text-align: left;
    outline: none;
    height: 37px;
    line-height: 35px;
    max-width: 140px;
  }

  .custom-select .selected {
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid #2C2C2C;
    font-size: 14px;
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }

  .custom-select .selected.open {
    border-radius: 6px 6px 0px 0px;
  }

  .custom-select .selected:after {
    position: absolute;
    content: "";
    top: 17px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  .custom-select .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #2C2C2C;
    border-left: 1px solid #2C2C2C;
    border-bottom: 1px solid #2C2C2C;
    position: absolute;
    background-color: #1C1C1C;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .custom-select .items div {
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }

  .custom-select .items div:hover {
    background-color: #000;
  }

  // 

  .collection {
    border-left: 1px solid rgba(255, 255, 255, 0.14);
  }

  .select-items {
    background: #1C1C1C;
  }

  .main-menu-list-list {
    background: #1C1C1C;
  }

  .burger span {
    background: #fff;
  }

  .header__wrapper {
    background: #1C1C1C;
  }

  .logo-img {
    content: url(../public/img/logo-img-dark.png);
  }

  .header__btn {
    background: #1C1C1C;

    svg g path {
      fill: #FFFFFF;
    }

    &:hover {
      svg g path {
        fill: rgba(255, 255, 255, 0.31);
      }
    }
  }

  .header-form {
    background: #1C1C1C;
  }

  .header-form__input {
    background: transparent;
  }

  .header-form__btn {
    svg g path {
      fill: #fff;
    }
  }

  .header-nav__list-link {
    color: #FFFFFF;
  }

  .header-nav__list-item:nth-child(2) a {
    color: rgba(255, 255, 255, 0.3);
  }

  .header-nav__list-item:nth-child(2) a svg path {
    fill: rgba(255, 255, 255, 0.3);
  }

  .header-nav__list-link svg path {
    fill: #fff;
  }

  .soon-box {
    background: #282828;

    &::before {
      background-image: url(../public/img/soon-box-icon-black.svg);
    }
  }

  .soon-box__text {
    color: #FFFFFF;
  }

  .soon-box {
    svg g path {
      fill: #fff;
    }
  }

  .main-menu-list__link {
    color: #fff;
  }

  .main-menu-list__link-text {
    color: rgba(255, 255, 255, 0.3);
  }

  .main-menu-list__text {
    color: #fff;
  }

  .main-menu-list__box svg path {
    fill: #fff;
  }

  .main-menu-list-list__item:first-child .main-menu-list-list__link {
    color: #fff;
  }

  .main-menu-list-list__item:nth-child(2) .main-menu-list-list__link {
    color: #fff;
  }

  .main-menu-list-list__link {
    color: rgba(255, 255, 255, 0.3);
  }

  .collections {
    background-image: url(../public/img/collections-bg-img-dark.png);
  }

  .collections-top__title {
    color: #FFFFFF;
  }

  .select-items div,
  .select-selected {
    color: #FFFFFF;
  }

  .select-selected:after {
    background-image: url(../public/img/collections-select-icon-dark.svg);
  }

  .collections__content-title {
    color: #fff;
  }

  .footer__text {
    color: #fff;
  }

  .footer__row-link:nth-child(1) img {
    content: url(../public/img/twitter-icon-dark.png);
  }

  .footer__row-link:nth-child(2) img {
    content: url(../public/img/discord-icon-dark.png);
  }

  .benefits-info__title {
    color: #fff;
  }

  .benefits-info__text {
    color: #fff;
  }

  .benefits-info-list__text {
    color: #fff;
  }

  .benefits {
    border-left: 1px solid rgba(255, 255, 255, 0.14);
  }

  .collection-content__title {
    color: #fff;
  }

  .collection-content-box__text {
    color: #fff;
  }

  .collection-content-box__info {
    color: #fff;
  }

  .collection-content-row__box-text {
    color: #fff;
  }

  .collection-content-row__box svg g path {
    fill: #fff;
  }

  .collection-content-row__box:nth-child(2) .collection-content-row__box-text {
    background: linear-gradient(90.95deg, #FF0093 0.33%, #FF0093 99.38%), #070707;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .collection-content-row__button {
    background: rgba(226, 226, 226, 0.32);
  }

  .collection-content-row__button svg path {
    fill: #fff;
  }

  .collection-info__title {
    color: #fff;
  }

  .collection-info-items-item:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  .collection-info-items .mixitup-control-active {
    background: rgba(255, 255, 255, 0.22);
  }

  .collection-info-items-item-box__title {
    color: #fff;
  }

  .collection-content-item {
    background: linear-gradient(0deg, #282828, #282828), #FFFFFF;
  }

  .collection-content-item__text {
    color: #fff;
  }

  .collection-content-item-row__text {
    color: #fff;
  }

  .balance {
    border-left: 1px solid rgba(255, 255, 255, 0.14);
  }

  .balance-top-info {
    background: #282828;
  }

  .balance-top-info__title {
    color: #fff;
  }

  .balance-top-info__row-text {
    color: #fff;
  }

  .balance-top-info__row-count {
    color: #fff;
  }

  .balance-top-content-swiper-box__column-text {
    color: #fff;
  }

  .balance-top-content-body__title {
    color: #fff;
  }

  .balance-top-content-body__box {
    color: #fff;
  }

  .balance-rewards__item {
    background: rgba(242, 242, 242, 0.06);
  }

  .balance-rewards__item-text {
    color: #fff;
  }

  .balance-row-info__item:nth-child(2) .balance-row-info__item-text {
    color: #fff;
  }

  .balance-row-info__item:nth-child(2) svg g path {
    fill: #fff;
  }

  .balance-nft-item {
    background: #282828;
  }

  .balance-nft-item__text {
    color: #fff;
  }

  .stake-popup {
    background: #282828;
  }

  .stake-popup__title {
    color: #fff;
  }

  .stake-popup__text {
    color: #fff;
  }

  .stake-popup-row {
    background: #1E1E1E;
  }

  .stake-popup-row__text {
    color: #383838;

  }

  .stake-popup-row__info {
    background: rgba(242, 242, 242, 0.06);
    color: #fff;
  }
}

// // </style>