<script>

import CustomSelect from "../components/CustomSelect.vue";

export default {
    name: 'collectionss.vue',
    data() {
        return {

        }
    },
    components: {
        CustomSelect,
    },
}

</script>

<template>
    <section class="main__collections collections">
        <div class="container">
            <div class="collections__top collections-top">
                <h2 class="collections-top__title">
                    Trending collections
                </h2>

                <CustomSelect
                :options="['24 hours', '1 week', '1 month']"
                :default="'24 hours'"
                class="select"
              />

            </div>
            <div class="collections__content">
                <img class="collections__content-img" src="../../public/img/collections-logo.png" alt="logo">
                <h2 class="collections__content-title">
                    Coming Soon
                </h2>
                <button class="collections__content-link btn" type="button">
                    <span>
                        Explore More
                    </span>
                    <span>
                        Explore More
                    </span>
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import '../assets/scss/style.scss';

.collections {
    max-width: 1315px;
    margin-left: auto;
    margin-right: auto;
    background-image: url(../../public/img/collections-bg-img.png);
    background-repeat: no-repeat;
    background-position: center top 45px;

    &__content {
        @include adaptiv-value("padding-top", 115, 50, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include adaptiv-value("padding-bottom", 60, 0, 1);
    }

    &__content-img {
        @include adaptiv-value("width", 138, 100, 1);
        margin-bottom: 22px;
    }

    &__content-title {
        font-weight: 700;
        @include adaptiv-value("font-size", 97, 30, 1);
        @include adaptiv-value("line-height", 110, 36, 1);
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        color: #2C2C2C;
        @include adaptiv-value("margin-bottom", 70, 40, 1);
    }

    &__content-link {}

    .btn {
        min-width: 335px;

        span {
            min-width: 335px;
            @include adaptiv-value("padding", 25, 15, 1);
        }
    }
}

.collections-top {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 5px;
    @include adaptiv-value("margin-left", 75, 0, 1);

    &__title {
        font-weight: 700;
        @include adaptiv-value("font-size", 35, 20, 1);
        @include adaptiv-value("line-height", 38, 24, 1);
        color: #2C2C2C;
    }
}

@media (max-width: 1000px) {
    .collections-top {
        margin-left: unset;
        justify-content: space-between;
        @include adaptiv-value("gap", 20, 10, 1);
        flex-wrap: wrap;
    }

    .collections {
        background-position: center top 20px;
    }
}

@media (max-width: 900) {
    .collections {
        background-position: center top 0;
    }
}

@media (max-width: 500px) {
    .collections-top {
        justify-content: center;
    }

    .collections {
        background-size: contain;
        background-position: center top 27%;
    }
}

@media (max-width: 400px) {
    .collections {
        background-position: center top 37%;
    }
}

@media (max-width: 380px) {
    .collections .btn span {
        width: 100%;
        max-width: 100%;
        min-width: unset;
    }

    .collections .btn {
        min-width: 280px;
    }
}
</style>