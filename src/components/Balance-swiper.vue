<template>
    <swiper class="balance-top-content__swiper balance-top-content-swiper" :modules="modules" :autoplay="{ delay: 5000 }"
        :loop="true" navigation :speed="750" :slides-per-view="1.65" :space-between="20" @swiper="onSwiper"
        @slideChange="onSlideChange" :breakpoints="{ 301: { slidesPerView: 1 }, 1461: { slidesPerView: 1.65 } }">
        <swiper-slide>
            <div class="balance-top-content-swiper__box balance-top-content-swiper-box balance-top-content-swiper-box--first" data-filter=".item-first" ref="ItemFirst" @click="$emit('clickOnItem', this.$refs.ItemFirst)">
                <img class="balance-top-content-swiper-box__img" src="../../public/img/balance-slide-img-1.png" alt="img">
                <div class="balance-top-content-swiper-box__column">
                    <p class="balance-top-content-swiper-box__column-text">
                        Tribe Dragonz Gen-0
                    </p>
                    <p class="balance-top-content-swiper-box__column-count">
                        6 items
                    </p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="balance-top-content-swiper__box balance-top-content-swiper-box balance-top-content-swiper-box--second" data-filter=".item-second" ref="ItemSecond" @click="$emit('clickOnItem', this.$refs.ItemSecond)">
                <img class="balance-top-content-swiper-box__img" src="../../public/img/nft-item-img-1.png" alt="img">
                <div class="balance-top-content-swiper-box__column">
                    <p class="balance-top-content-swiper-box__column-text">
                        Tribe Dragonz Gen-1
                    </p>
                    <p class="balance-top-content-swiper-box__column-count">
                        5 items
                    </p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
    name: 'Balance-swiper.vue',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Autoplay],
        };
    },
};
</script>

<style lang="scss">
@import '../assets/scss/vars';

.balance-top-content {}

.balance-top-content-swiper {
    padding-top: 45px;
    margin-top: -45px;
    position: relative;
    max-width: 675px;

    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
        content: unset;
    }

    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after {
        content: unset;
    }

    .swiper-button-prev {
        background-image: url(../../public/img/balance-arrow.svg);
        background-repeat: no-repeat;
        @include adaptiv-value("width", 23, 16, 1);
        @include adaptiv-value("height", 23, 16, 1);
        top: 22px;
        position: absolute;
        background-size: contain;
        left: 50%;
    }

    .swiper-button-next {
        transform: rotate(180deg);
        background-image: url(../../public/img/balance-arrow.svg);
        background-repeat: no-repeat;
        @include adaptiv-value("width", 23, 16, 1);
        @include adaptiv-value("height", 23, 16, 1);
        top: 22px;
        right: 40.5%;
        position: absolute;
        background-size: contain;
    }
}

.balance-top-content-swiper-box {
    cursor: pointer;
    background: rgba(150, 150, 150, 0.22);
    border-radius: 23px;
    @include adaptiv-value("padding-top", 20, 10, 1);
    @include adaptiv-value("padding-bottom", 20, 10, 1);
    @include adaptiv-value("padding-right", 23, 10, 1);
    @include adaptiv-value("padding-left", 28, 10, 1);
    display: flex;
    @include adaptiv-value("gap", 27, 15, 1);
    align-items: center;
    max-width: 400px;

    &__img {
        @include adaptiv-value("width", 134, 100, 1);
        @include adaptiv-value("min-width", 134, 100, 1);
        @include adaptiv-value("height", 122, 90, 1);
        border-radius: 20px;
    }

    &__column {
        display: flex;
        flex-direction: column;
        @include adaptiv-value("gap", 12, 6, 1);
    }

    &__column-text {
        font-weight: 700;
        @include adaptiv-value("font-size", 25, 20, 1);
        @include adaptiv-value("line-height", 29, 24, 1);
        color: #2C2C2C;
    }

    &__column-count {
        font-weight: 700;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 18, 14, 1);
        background: linear-gradient(90.95deg, #FF0093 0.33%, #FF0093 99.38%), linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%), #2C2C2C;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}

@media (max-width: 1460px) {
    .balance-top-content-swiper {
        width: 400px;
        max-width: 400px;
    }

    .balance {
        margin-right: auto;
    }

    .balance-top-content-swiper .swiper-button-prev {
        left: 85%;
    }

    .balance-top-content-swiper .swiper-button-next {
        right: 0%;
    }
}

@media (max-width: 1150px) {
    .balance-top-content-swiper {
        @include adaptiv-value("padding-bottom", 45, 30, 1);
        @include adaptiv-value("margin-bottom", -45, 30, 1);
        padding-top: unset;
        margin-top: unset;
    }

    .balance-top-content-swiper .swiper-button-prev {
        top: unset;
        bottom: 0px;
        right: unset;
        left: 15%;
        transform: translateX(-100%);
    }

    .balance-top-content-swiper .swiper-button-next {
        top: unset;
        bottom: 0;
        right: 80%;
        transform: translateX(100%) rotate(180deg);
    }
}
@media (max-width: 700px) {
    .balance-top-content-swiper .swiper-button-prev {
        left: 48%;
    }
    .balance-top-content-swiper .swiper-button-next {
        right: 48%;
    }
}
@media (max-width: 450px) {
    .balance-top-content-swiper {
        max-width: 100%;
        width: 100%;
    }
    .balance-top-content-swiper-box {
        max-width: 100%;
    }
}
</style>