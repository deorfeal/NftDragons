<script>

export default {
    name: 'Menu.vue',
    data() {
        return {

        }
    },
    methods: {
        clickOnList() {
            if (this.$refs.listActive.classList.contains('list--active')) {
                this.$refs.listActive.classList.remove('list--active')
            } else {
                this.$refs.listActive.classList.add('list--active')
            }
        }
    }
}

</script>

<template>
    <div class="main__menu main-menu">
        <ul class="main-menu__list main-menu-list">
            <li class="main-menu-list__item">
                <router-link to="/">
                    <a class="main-menu-list__link" href="index.html">
                        Marketplace
                    </a>
                </router-link>
            </li>
            <li class="main-menu-list__item">
                <a class="main-menu-list__link main-menu-list__link--disabled" href="#">
                    <p class="main-menu-list__link-text">
                        Raffles
                    </p>
                    <div class="soon-box">
                        <p class="soon-box__text">
                            Coming Soon
                        </p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_9_198)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.2411 9.15512C17.2411 11.4049 16.3775 13.5625 14.8404 15.1533C13.3033 16.7442 11.2185 17.6379 9.04463 17.6379C6.87081 17.6379 4.78601 16.7442 3.24888 15.1533C1.71176 13.5625 0.848206 11.4049 0.848206 9.15512C0.848206 6.90535 1.71176 4.74773 3.24888 3.15691C4.78601 1.56608 6.87081 0.672363 9.04463 0.672363C11.2185 0.672363 13.3033 1.56608 14.8404 3.15691C16.3775 4.74773 17.2411 6.90535 17.2411 9.15512ZM12.481 6.34945C12.5772 6.2499 12.6312 6.11488 12.6312 5.97409C12.6312 5.8333 12.5772 5.69828 12.481 5.59873C12.3848 5.49917 12.2543 5.44324 12.1183 5.44324C11.9823 5.44324 11.8518 5.49917 11.7556 5.59873L5.60828 11.9608C5.56065 12.0101 5.52287 12.0686 5.49709 12.133C5.47132 12.1974 5.45805 12.2664 5.45805 12.3362C5.45805 12.4059 5.47132 12.4749 5.49709 12.5393C5.52287 12.6037 5.56065 12.6622 5.60828 12.7115C5.70447 12.8111 5.83494 12.867 5.97097 12.867C6.03833 12.867 6.10503 12.8533 6.16726 12.8266C6.22949 12.7999 6.28604 12.7608 6.33367 12.7115L12.481 6.34945Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9_198">
                                    <rect width="16.3929" height="16.9655" fill="white"
                                        transform="translate(0.848206 0.672363)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
            </li>
            <li ref="listActive" class="main-menu-list__item">
                <div class="main-menu-list__box" @click="clickOnList">
                    <p class="main-menu-list__text" href="#">
                        Staking
                    </p>
                    <svg width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.45556 12.2816C1.51126 12.0672 1.60866 11.9042 1.72641 11.8285C1.84415 11.7527 1.97264 11.7703 2.08368 11.8774L7.49962 17.1101L12.9146 11.8756C12.9697 11.8212 13.0298 11.7884 13.0915 11.7791C13.1532 11.7698 13.2152 11.7842 13.274 11.8215C13.3328 11.8588 13.3871 11.9182 13.434 11.9963C13.4808 12.0744 13.5192 12.1697 13.5469 12.2766C13.5747 12.3835 13.5912 12.5 13.5955 12.6193C13.5998 12.7386 13.5919 12.8584 13.5721 12.9718C13.5524 13.0851 13.5212 13.1898 13.4805 13.2798C13.4397 13.3697 13.3901 13.4432 13.3346 13.496L7.70962 18.9335C7.64444 18.9966 7.57253 19.0295 7.49962 19.0295C7.42671 19.0295 7.35481 18.9966 7.28962 18.9335L1.66462 13.496C1.55373 13.3883 1.46944 13.2 1.43025 12.9723C1.39106 12.7447 1.40016 12.4963 1.45556 12.2816Z"
                            fill="black" />
                    </svg>
                </div>
                <ul class="main-menu-list__list main-menu-list-list" id="nav">
                    <li class="main-menu-list-list__item">
                        <router-link to="/freeze2Earn">
                            <a class="main-menu-list-list__link" href="">
                                Freeze2Earn
                            </a>
                        </router-link>
                    </li>
                    <li class="main-menu-list-list__item">
                        <router-link to="/stake2Earn">
                            <a class="main-menu-list-list__link" href="">
                                Stake2Earn
                            </a>
                        </router-link>
                    </li>
                    <li class="main-menu-list-list__item">
                            <a class="main-menu-list-list__link" href="#">
                                Tribe Journey
                                <div class="soon-box">
                                    <p class="soon-box__text">
                                        Coming Soon
                                    </p>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_9_198)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M17.2411 9.15512C17.2411 11.4049 16.3775 13.5625 14.8404 15.1533C13.3033 16.7442 11.2185 17.6379 9.04463 17.6379C6.87081 17.6379 4.78601 16.7442 3.24888 15.1533C1.71176 13.5625 0.848206 11.4049 0.848206 9.15512C0.848206 6.90535 1.71176 4.74773 3.24888 3.15691C4.78601 1.56608 6.87081 0.672363 9.04463 0.672363C11.2185 0.672363 13.3033 1.56608 14.8404 3.15691C16.3775 4.74773 17.2411 6.90535 17.2411 9.15512ZM12.481 6.34945C12.5772 6.2499 12.6312 6.11488 12.6312 5.97409C12.6312 5.8333 12.5772 5.69828 12.481 5.59873C12.3848 5.49917 12.2543 5.44324 12.1183 5.44324C11.9823 5.44324 11.8518 5.49917 11.7556 5.59873L5.60828 11.9608C5.56065 12.0101 5.52287 12.0686 5.49709 12.133C5.47132 12.1974 5.45805 12.2664 5.45805 12.3362C5.45805 12.4059 5.47132 12.4749 5.49709 12.5393C5.52287 12.6037 5.56065 12.6622 5.60828 12.7115C5.70447 12.8111 5.83494 12.867 5.97097 12.867C6.03833 12.867 6.10503 12.8533 6.16726 12.8266C6.22949 12.7999 6.28604 12.7608 6.33367 12.7115L12.481 6.34945Z"
                                                fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_9_198">
                                                <rect width="16.3929" height="16.9655" fill="white"
                                                    transform="translate(0.848206 0.672363)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </a>
                    </li>
                    <router-view/>
                </ul>
            </li>
            <li class="main-menu-list__item">
                <a class="main-menu-list__link main-menu-list__link--disabled" href="#">
                    <p class="main-menu-list__link-text">
                        Watchlist
                    </p>
                    <div class="soon-box">
                        <p class="soon-box__text">
                            Coming Soon
                        </p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_9_198)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.2411 9.15512C17.2411 11.4049 16.3775 13.5625 14.8404 15.1533C13.3033 16.7442 11.2185 17.6379 9.04463 17.6379C6.87081 17.6379 4.78601 16.7442 3.24888 15.1533C1.71176 13.5625 0.848206 11.4049 0.848206 9.15512C0.848206 6.90535 1.71176 4.74773 3.24888 3.15691C4.78601 1.56608 6.87081 0.672363 9.04463 0.672363C11.2185 0.672363 13.3033 1.56608 14.8404 3.15691C16.3775 4.74773 17.2411 6.90535 17.2411 9.15512ZM12.481 6.34945C12.5772 6.2499 12.6312 6.11488 12.6312 5.97409C12.6312 5.8333 12.5772 5.69828 12.481 5.59873C12.3848 5.49917 12.2543 5.44324 12.1183 5.44324C11.9823 5.44324 11.8518 5.49917 11.7556 5.59873L5.60828 11.9608C5.56065 12.0101 5.52287 12.0686 5.49709 12.133C5.47132 12.1974 5.45805 12.2664 5.45805 12.3362C5.45805 12.4059 5.47132 12.4749 5.49709 12.5393C5.52287 12.6037 5.56065 12.6622 5.60828 12.7115C5.70447 12.8111 5.83494 12.867 5.97097 12.867C6.03833 12.867 6.10503 12.8533 6.16726 12.8266C6.22949 12.7999 6.28604 12.7608 6.33367 12.7115L12.481 6.34945Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9_198">
                                    <rect width="16.3929" height="16.9655" fill="white"
                                        transform="translate(0.848206 0.672363)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
            </li>
            <li class="main-menu-list__item">
                <a class="main-menu-list__link main-menu-list__link--disabled" href="#">
                    <p class="main-menu-list__link-text">
                        Analytics
                    </p>
                    <div class="soon-box">
                        <p class="soon-box__text">
                            Coming Soon
                        </p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_9_198)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.2411 9.15512C17.2411 11.4049 16.3775 13.5625 14.8404 15.1533C13.3033 16.7442 11.2185 17.6379 9.04463 17.6379C6.87081 17.6379 4.78601 16.7442 3.24888 15.1533C1.71176 13.5625 0.848206 11.4049 0.848206 9.15512C0.848206 6.90535 1.71176 4.74773 3.24888 3.15691C4.78601 1.56608 6.87081 0.672363 9.04463 0.672363C11.2185 0.672363 13.3033 1.56608 14.8404 3.15691C16.3775 4.74773 17.2411 6.90535 17.2411 9.15512ZM12.481 6.34945C12.5772 6.2499 12.6312 6.11488 12.6312 5.97409C12.6312 5.8333 12.5772 5.69828 12.481 5.59873C12.3848 5.49917 12.2543 5.44324 12.1183 5.44324C11.9823 5.44324 11.8518 5.49917 11.7556 5.59873L5.60828 11.9608C5.56065 12.0101 5.52287 12.0686 5.49709 12.133C5.47132 12.1974 5.45805 12.2664 5.45805 12.3362C5.45805 12.4059 5.47132 12.4749 5.49709 12.5393C5.52287 12.6037 5.56065 12.6622 5.60828 12.7115C5.70447 12.8111 5.83494 12.867 5.97097 12.867C6.03833 12.867 6.10503 12.8533 6.16726 12.8266C6.22949 12.7999 6.28604 12.7608 6.33367 12.7115L12.481 6.34945Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9_198">
                                    <rect width="16.3929" height="16.9655" fill="white"
                                        transform="translate(0.848206 0.672363)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
            </li>
            <li class="main-menu-list__item">
                <router-link to="/tribepass">
                    <a class="main-menu-list__link" href="#">
                        Tribe Pass
                    </a>
                </router-link>
            </li>
            <li class="main-menu-list__item">
                <a class="main-menu-list__link main-menu-list__link--disabled" href="#">
                    <p class="main-menu-list__link-text">
                        Support
                    </p>
                    <div class="soon-box">
                        <p class="soon-box__text">
                            Coming Soon
                        </p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_9_198)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.2411 9.15512C17.2411 11.4049 16.3775 13.5625 14.8404 15.1533C13.3033 16.7442 11.2185 17.6379 9.04463 17.6379C6.87081 17.6379 4.78601 16.7442 3.24888 15.1533C1.71176 13.5625 0.848206 11.4049 0.848206 9.15512C0.848206 6.90535 1.71176 4.74773 3.24888 3.15691C4.78601 1.56608 6.87081 0.672363 9.04463 0.672363C11.2185 0.672363 13.3033 1.56608 14.8404 3.15691C16.3775 4.74773 17.2411 6.90535 17.2411 9.15512ZM12.481 6.34945C12.5772 6.2499 12.6312 6.11488 12.6312 5.97409C12.6312 5.8333 12.5772 5.69828 12.481 5.59873C12.3848 5.49917 12.2543 5.44324 12.1183 5.44324C11.9823 5.44324 11.8518 5.49917 11.7556 5.59873L5.60828 11.9608C5.56065 12.0101 5.52287 12.0686 5.49709 12.133C5.47132 12.1974 5.45805 12.2664 5.45805 12.3362C5.45805 12.4059 5.47132 12.4749 5.49709 12.5393C5.52287 12.6037 5.56065 12.6622 5.60828 12.7115C5.70447 12.8111 5.83494 12.867 5.97097 12.867C6.03833 12.867 6.10503 12.8533 6.16726 12.8266C6.22949 12.7999 6.28604 12.7608 6.33367 12.7115L12.481 6.34945Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9_198">
                                    <rect width="16.3929" height="16.9655" fill="white"
                                        transform="translate(0.848206 0.672363)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/vars';

.main-menu {
    @include adaptiv-value("padding-top", 55, 20, 1);
    width: 135px;
    max-width: 135px;
    min-width: 135px;
}

.main-menu-list {
    &__item {
        &:hover {
            .soon-box {
                opacity: 1;
                z-index: 1;
            }
        }
    }

    &__item:nth-child(3) {
        cursor: pointer;
    }

    &__link {
        @include adaptiv-value("font-size", 20, 14, 1);
        @include adaptiv-value("line-height", 50, 25, 1);
        color: #000000;
    }

    &__link--disabled {
        font-size: unset;
        line-height: unset;
        cursor: default;
    }

    &__link-text {
        @include adaptiv-value("font-size", 20, 14, 1);
        @include adaptiv-value("line-height", 50, 25, 1);
        color: rgba(0, 0, 0, 0.3);
    }

    &__text {
        @include adaptiv-value("font-size", 20, 14, 1);
        @include adaptiv-value("line-height", 50, 25, 1);
        color: #000000;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}

.list--active {
    .main-menu-list-list {
        opacity: 0;
        position: absolute;
        z-index: -1;
    }

    .main-menu-list__box {
        svg {
            transform: rotate(180deg);
        }
    }
}

.soon-box {
    position: absolute;
    opacity: 0;
    width: 135px;
    max-width: 135px;
    height: 30px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 13px;
    filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.29));
    transition: opacity 0.3s;
    z-index: -1;

    &::before {
        content: '';
        width: 12px;
        height: 14px;
        background-image: url(../../public/img/soon-box-icon.svg);
        position: absolute;
        top: -10px;
        background-repeat: no-repeat;
        left: 14px;
    }

    &__text {
        font-size: 12px;
        line-height: 26px;
        color: #000000;
    }
}

.main-menu-list-list {
    display: flex;
    flex-direction: column;

    &__item {
        .soon-box {
            opacity: 0 !important;
        }
        &:hover {
            .soon-box {
                opacity: 0 !important;
            }
        }
    }

    &__item:last-child {
        cursor: default;
        a {
            cursor: default;
        }
        &:hover {
            .soon-box {
                opacity: 1 !important;
            }
        }
    }

    &__item:first-child {
        .main-menu-list-list__link {
            color: #000000;
        }
    }

    &__item:nth-child(2) {
        .main-menu-list-list__link {
            color: #000000;
        }
    }

    &__link {

        @include adaptiv-value("font-size", 14, 12, 1);
        @include adaptiv-value("line-height", 35, 20, 1);
        color: rgba(0, 0, 0, 0.3);

        // transition: color 0.3s;
        &:hover {
          
        }
    }
}

@media (max-width: 1000px) {
    .main-menu-list__item {
        svg {
            transform: rotate(180deg);
        }
    }

    .main-menu-list-list {
        display: none;
    }

    .list--active .main-menu-list-list {
        display: flex;
        opacity: 1;
        z-index: 10;
    }

    .list--active .main-menu-list__box svg {
        transform: rotate(0deg);
    }

    .main-top {
        flex-direction: column;
    }

    .main-menu {
        width: 100%;
        max-width: 100%;
    }

    .main-menu-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        @include adaptiv-value("gap", 20, 10, 1);
    }

    .main-menu-list__item {
        position: relative;
    }

    .main-menu-list__item .soon-box {
        left: -80px;
        display: none;
    }

    .main-menu-list__item .soon-box::before {
        left: 105px;
    }

    .main-menu-list-list {
        position: absolute;
        background: #fff;
    }

    .main-menu-list-list {
        left: -30px;
        z-index: 50;
        padding: 20px;
        box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.13);
    }
}
</style>