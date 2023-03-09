<script>
// import { WalletMultiButton } from 'solana-wallets-vue'
export default {
    name: 'Header.vue',
    components: {
    // WalletMultiButton
    },
    data() {
        return {

        }
    },
    methods: {
        addBlackThem() {
            if (document.body.classList.contains('body--dark')) {
                document.body.classList.remove('body--dark')
            } else {
                document.body.classList.add('body--dark')
            }
        },
        showMenu() {
            if (document.body.classList.contains('body--menu')) {
                document.body.classList.remove('body--menu')
            } else {
                document.body.classList.add('body--menu')
            }
        }
    }
}

</script>

<template>
    <div class="header">
        <div class="container">
            <div class="header__inner">
                <router-link to="/">
                    <a class="header__logo logo" href="">
                        <img class="logo-img" src="../../public/img/logo-img.png" alt="logo">
                    </a>
                </router-link>
                <button class="header__btn" type="button" @click="addBlackThem">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_9_29)">
                            <path
                                d="M18.3333 14.0342L21.3675 11L18.3333 7.96584V3.66667H14.0342L11 0.632507L7.96583 3.66667H3.66667V7.96584L0.6325 11L3.66667 14.0342V18.3333H7.96583L11 21.3675L14.0342 18.3333H18.3333V14.0342ZM11 16.5V5.50001C14.0342 5.50001 16.5 7.96584 16.5 11C16.5 14.0342 14.0342 16.5 11 16.5Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_9_29">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <div class="header__wrapper">
                    <form class="header__form header-form" action="#">
                        <input class="header-form__input" type="text" placeholder="Search for collections">
                        <button class="header-form__btn" type="submit">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_9_33)">
                                    <path
                                        d="M13.5625 12.25H12.8713L12.6263 12.0138C13.4838 11.0162 14 9.72125 14 8.3125C14 5.17125 11.4537 2.625 8.3125 2.625C5.17125 2.625 2.625 5.17125 2.625 8.3125C2.625 11.4537 5.17125 14 8.3125 14C9.72125 14 11.0162 13.4838 12.0138 12.6263L12.25 12.8713V13.5625L16.625 17.9288L17.9288 16.625L13.5625 12.25ZM8.3125 12.25C6.13375 12.25 4.375 10.4913 4.375 8.3125C4.375 6.13375 6.13375 4.375 8.3125 4.375C10.4913 4.375 12.25 6.13375 12.25 8.3125C12.25 10.4913 10.4913 12.25 8.3125 12.25Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_9_33">
                                        <rect width="21" height="21" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
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
                    </form>
                    <nav class="header__nav header-nav">
                        <ul class="header-nav__list">
                            <li class="header-nav__list-item">
                                <router-link to="/">
                                    <a class="header-nav__list-link" href="">
                                        Collections
                                    </a>
                                </router-link>
                            </li>
                            <li class="header-nav__list-item">
                                <a class="header-nav__list-link" href="#">
                                    Launchpad
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.375 2.375V16.625H16.625V9.5H15.0417V15.0417H3.95833V3.95833H9.5V2.375H2.375ZM11.0833 2.375V3.95833H13.9222L6.56527 11.3153L7.68473 12.4347L15.0417 5.0778V7.91667H16.625V2.375H11.0833Z"
                                            fill="black" />
                                    </svg>
                                </a>
                                <div class="soon-box">
                                    <p class="soon-box__text">
                                        Coming Soon
                                    </p>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
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
                            </li>
                            <li class="header-nav__list-item">
                                <a class="header-nav__list-link" href="https://tribe-dragonz.gitbook.io/introduction/"
                                    target="_blank">
                                    Whitepaper
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.375 2.375V16.625H16.625V9.5H15.0417V15.0417H3.95833V3.95833H9.5V2.375H2.375ZM11.0833 2.375V3.95833H13.9222L6.56527 11.3153L7.68473 12.4347L15.0417 5.0778V7.91667H16.625V2.375H11.0833Z"
                                            fill="black" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button class="header__link btn" type="button">
                        <span>
                            Connect wallet
                        </span>
                        <span>
                            Connect wallet
                        </span>
                    </button>
                </div>
                <button class="header__burger burger" @click="showMenu">
                    <span>

                    </span>
                    <span>

                    </span>
                    <span>

                    </span>
                </button>
                <!-- <WalletMultiButton></WalletMultiButton>  -->
            </div>
        </div>
        <div class="header__bottom header-bottom">
            <div class="container">
                <p class="header-bottom__text">
                    Breaking News: We getting more &amp; more eyes on Tribe. It seems they begin to understand what all the
                    fuss is about.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/vars';

.header {
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 100%;
    }

    &__inner {
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    &__logo {}

    &__btn {
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        border-radius: 100%;
        margin-left: auto;
        margin-right: auto;

        svg {
            @include adaptiv-value("width", 22, 15, 1);
            @include adaptiv-value("height", 22, 15, 1);
        }

        svg g path {
            transition: fill 0.3s;
        }

        &:hover {
            svg g path {
                fill: rgba(44, 44, 44, 0.3);
            }
        }
    }

    &__link {
        max-width: 185px;
        min-width: 185px;

        span {
            font-weight: 700;
            font-size: 14px;
            line-height: 13px;
            text-align: center;
            background: linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%);
            border-radius: 7px;
            padding: 12px;
            max-width: 185px;
            min-width: 185px;
            color: #FFFFFF;
            display: block;
        }
    }
}

.burger {
    display: none;
}

.logo {
    @include adaptiv-value("width", 159, 110, 1);
}

.logo-img {
    @include adaptiv-value("width", 159, 110, 1);
}

.header-form {
    width: 100%;
    flex-grow: 1;
    height: 37px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
        position: absolute;
        border-radius: 32px;
    }

    &:hover {
        &::before {
            z-index: 10;
        }

        .soon-box {
            width: 100%;
            opacity: 1;
            top: 50px;
            left: 60%;
        }
    }

    &__input {
        border-radius: 32px;
        font-size: 14px;
        line-height: 13px;
        color: rgba(44, 44, 44, 0.31);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        padding-left: 30px;
        padding-right: 50px;
        z-index: 1;
    }

    &__btn {
        position: absolute;
        top: 50%;
        right: 20px;
        width: 21px;
        height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        transform: translateY(-50%);
    }

    .soon-box {
        opacity: 0;
        z-index: 2;
        opacity: 0;
        top: 50px;
        left: 60%;

        &__text {}
    }
}

.soon-box {
    opacity: 0;

    &__text {}
}

.header-nav {

    &__list {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__list-item {}

    &__list-item:nth-child(2) {
        position: relative;

        .soon-box {
            opacity: 0;
            position: absolute;
            bottom: -40px;
            z-index: 10;
        }

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        &:hover {
            &::before {
                z-index: 10;
            }

            .soon-box {
                opacity: 1;
                z-index: 10;
            }
        }

        a {
            color: rgba(44, 44, 44, 0.3);

            svg path {
                fill: rgba(44, 44, 44, 0.3);
            }
        }
    }

    &__list-link {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 13px;
        color: #2C2C2C;
        gap: 2px;

        &:hover {
            text-decoration: underline;
        }
    }
}

.header-bottom {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    background: linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%), #7C01F6;
    padding: 13px 0;
    width: 100%;

    .container {
        width: 100%;
    }

    &__text {
        font-weight: 700;
        @include adaptiv-value("font-size", 14, 12, 1);
        @include adaptiv-value("line-height", 18, 16, 1);
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.025em;
        color: #FFFFFF;
        animation: text 15s infinite linear;
    }
}

@keyframes text {
    0% {
        transform: translate(115%, 0);
    }

    100% {
        transform: translate(-90%, 0);
    }
}

@media (max-width: 1100px) {
    .burger {
        display: flex;
        align-items: center;
        flex-direction: column;
        @include adaptiv-value("width", 30, 25, 1);
        @include adaptiv-value("height", 15, 13, 1);
        justify-content: space-between;
        z-index: 101;
    }

    .burger span {
        height: 2px;
        width: 100%;
        background: #000;
    }

    .header__wrapper {
        position: absolute;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: #fff;
        z-index: 100;
        padding-left: 15px;
        padding-right: 15px;
    }

    .header-form {
        flex-grow: unset;
        margin-left: 15px;
        margin-right: 15px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .header-nav__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .header-form {
        max-width: 350px;
    }

    .header__btn {
        margin-right: unset;
    }

    .body--menu .header__wrapper {
        display: flex;
    }
}

@media (max-width: 1000px) {

    @keyframes text {
        0% {
            transform: translate(110%, 0);
        }

        100% {
            transform: translate(-110%, 0);
        }
    }
}
</style>