<script>

export default {
    name: 'Collection-content.vue',
    data() {
        return {

        }
    },
    mounted() {
        var mixer = mixitup('.collection-content__inner', {
            load: {
                filter: '.item-first'
            }
        });
    }
}

</script>

<template>
    <div class="main__collection collection">
        <div class="collection__content collection-content">
            <h2 class="collection-content__title">
                Fridge
            </h2>
            <div class="collection-content__box collection-content-box">
                <p class="collection-content-box__text">
                    Frozen (NFTs):
                </p>
                <p class="collection-content-box__info">
                    2 NFTs
                </p>
            </div>
            <div class="collection-content__box collection-content-box">
                <p class="collection-content-box__text">
                    My 24h Earnings:
                </p>
                <p class="collection-content-box__info">
                    0.0574 SOL
                </p>
            </div>
            <div class="collection-content__box collection-content-box">
                <p class="collection-content-box__text">
                    Claimable Reward:
                </p>
                <p class="collection-content-box__info">
                    2.4573 SOL
                </p>
            </div>
            <div class="collection-content__box collection-content-box">
                <p class="collection-content-box__text">
                    Total Reward Claimed:
                </p>
                <p class="collection-content-box__info">
                    6.5674847 SOL
                </p>
            </div>
            <button type="button" class="collection-content__link btn">
                <span>
                    Claim Rewards
                </span>
                <span>
                    Claim Rewards
                </span>
            </button>
            <div class="collection-content__row collection-content-row">
                <div class="collection-content-row__box">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_52_282)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.10051 23.8995C1.475 21.274 0 17.713 0 14C0 10.287 1.475 6.72601 4.10051 4.10051C6.72601 1.475 10.287 0 14 0C17.713 0 21.274 1.475 23.8995 4.10051C26.525 6.72601 28 10.287 28 14ZM21.0525 8.6975C20.9275 8.57293 20.7787 8.47485 20.6149 8.40913C20.4511 8.3434 20.2758 8.31138 20.0993 8.31497C19.9229 8.31857 19.749 8.3577 19.588 8.43004C19.427 8.50239 19.2823 8.60645 19.1625 8.736L13.0848 16.4797L9.422 12.8153C9.17319 12.5834 8.84411 12.4572 8.50409 12.4632C8.16406 12.4692 7.83963 12.6069 7.59916 12.8474C7.35869 13.0879 7.22094 13.4123 7.21494 13.7523C7.20894 14.0924 7.33516 14.4214 7.567 14.6703L12.1975 19.3025C12.3222 19.427 12.4708 19.5251 12.6343 19.591C12.7978 19.6569 12.9728 19.6891 13.1491 19.6859C13.3253 19.6826 13.499 19.6439 13.66 19.572C13.8209 19.5001 13.9657 19.3966 14.0857 19.2675L21.0718 10.535C21.3099 10.2874 21.4415 9.95623 21.4382 9.61268C21.4349 9.26912 21.2971 8.94055 21.0543 8.6975H21.0525Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_52_282">
                                <rect width="28" height="28" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="collection-content-row__box-text">
                        Available
                    </p>
                </div>
                <div class="collection-content-row__box">
                    <img class="collection-content-row__box-img" src="../../public/img/frozen-icon.png" alt="icon">
                    <p class="collection-content-row__box-text">
                        Frozen
                    </p>
                </div>
                <button class="collection-content-row__button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.9999 4.5C10.379 4.50062 8.80183 5.02639 7.50475 5.99856C6.20766 6.97072 5.26045 8.33696 4.80498 9.89262C4.34952 11.4483 4.41031 13.1096 4.97827 14.6278C5.54622 16.1461 6.59076 17.4394 7.95543 18.3142C9.3201 19.1889 10.9315 19.598 12.5481 19.4801C14.1648 19.3623 15.6998 18.7238 16.9232 17.6604C18.1465 16.597 18.9925 15.1658 19.3342 13.5813C19.676 11.9968 19.4952 10.3442 18.8189 8.871C18.7453 8.69189 18.7438 8.49126 18.8148 8.31108C18.8858 8.13091 19.0237 7.98516 19.1996 7.90435C19.3756 7.82353 19.576 7.81391 19.7589 7.8775C19.9418 7.94109 20.093 8.07295 20.1809 8.2455C20.9924 10.0134 21.2093 11.9966 20.799 13.8981C20.3888 15.7996 19.3735 17.5169 17.9053 18.793C16.4371 20.069 14.595 20.835 12.6549 20.9762C10.7148 21.1175 8.78117 20.6263 7.14364 19.5764C5.50611 18.5264 4.25283 16.9742 3.57153 15.1522C2.89023 13.3301 2.81759 11.3364 3.36449 9.46967C3.91138 7.6029 5.04838 5.96357 6.60516 4.79723C8.16194 3.63089 10.0547 3.00033 11.9999 3V4.5Z"
                            fill="black" />
                        <path
                            d="M12 6.69913V0.801129C12 0.729874 12.0204 0.660101 12.0586 0.599981C12.0969 0.539861 12.1514 0.491882 12.216 0.461663C12.2805 0.431444 12.3523 0.420236 12.423 0.42935C12.4936 0.438465 12.5602 0.467526 12.615 0.513129L16.155 3.46213C16.335 3.61213 16.335 3.88813 16.155 4.03813L12.615 6.98713C12.5602 7.03273 12.4936 7.06179 12.423 7.07091C12.3523 7.08002 12.2805 7.06881 12.216 7.0386C12.1514 7.00838 12.0969 6.9604 12.0586 6.90028C12.0204 6.84016 12 6.77038 12 6.69913Z"
                            fill="black" />
                    </svg>
                </button>
            </div>
            <div class="collection-content__inner">
                <div class="collection-content__item--first mix item-first">
                    <div class="collection-content__item collection-content-item">
                        <img class="collection-content-item__img"
                            src="../../public/img/collection-content-item-nft-img-1.png" alt="img">
                        <p class="collection-content-item__text">
                            Dragoon:
                            <span>
                                #289
                            </span>
                        </p>
                        <div class="collection-content-item__row collection-content-item-row">
                            <p class="collection-content-item-row__text">
                                24h Earnings
                            </p>
                            <div class="collection-content-item-row__box">
                                <img class="collection-content-item-row__box-img"
                                    src="../../public/img/collection-content-item-img.png" alt="img">
                                0.025
                            </div>
                        </div>
                        <button class="collection-content-item__link btn" type="button">
                            <span>
                                Unfreeze
                            </span>
                            <span>
                                Unfreeze
                            </span>
                        </button>
                    </div>
                    <div class="collection-content__item collection-content-item">
                        <img class="collection-content-item__img"
                            src="../../public/img/collection-content-item-nft-img-2.png" alt="img">
                        <p class="collection-content-item__text">
                            Dragoon:
                            <span>
                                #290
                            </span>
                        </p>
                        <div class="collection-content-item__row collection-content-item-row">
                            <p class="collection-content-item-row__text">
                                24h Earnings
                            </p>
                            <div class="collection-content-item-row__box">
                                <img class="collection-content-item-row__box-img"
                                    src="../../public/img/collection-content-item-img.png" alt="img">
                                0.025
                            </div>
                        </div>
                        <button class="collection-content-item__link btn" type="button">
                            <span>
                                Unfreeze
                            </span>
                            <span>
                                Unfreeze
                            </span>
                        </button>
                    </div>
                </div>
                <div class="collection-content__item--second mix item-second">
                    <div class="collection-content__item collection-content-item">
                        <img class="collection-content-item__img"
                            src="../../public/img/collection-content-item-nft-img-2.png" alt="img">
                        <p class="collection-content-item__text">
                            Dragoon:
                            <span>
                                #291
                            </span>
                        </p>
                        <div class="collection-content-item__row collection-content-item-row">
                            <p class="collection-content-item-row__text">
                                24h Earnings
                            </p>
                            <div class="collection-content-item-row__box">
                                <img class="collection-content-item-row__box-img"
                                    src="../../public/img/collection-content-item-img.png" alt="img">
                                0.025
                            </div>
                        </div>
                        <button class="collection-content-item__link btn" type="button">
                            <span>
                                Unfreeze
                            </span>
                            <span>
                                Unfreeze
                            </span>
                        </button>
                    </div>
                    <div class="collection-content__item collection-content-item">
                        <img class="collection-content-item__img"
                            src="../../public/img/collection-content-item-nft-img-3.png" alt="img">
                        <p class="collection-content-item__text">
                            Dragoon:
                            <span>
                                #292
                            </span>
                        </p>
                        <div class="collection-content-item__row collection-content-item-row">
                            <p class="collection-content-item-row__text">
                                24h Earnings
                            </p>
                            <div class="collection-content-item-row__box">
                                <img class="collection-content-item-row__box-img"
                                    src="../../public/img/collection-content-item-img.png" alt="img">
                                0.025
                            </div>
                        </div>
                        <button class="collection-content-item__link btn" type="button">
                            <span>
                                Unfreeze
                            </span>
                            <span>
                                Unfreeze
                            </span>
                        </button>
                    </div>
                    <div class="collection-content__item collection-content-item">
                        <img class="collection-content-item__img"
                            src="../../public/img/collection-content-item-nft-img-4.png" alt="img">
                        <p class="collection-content-item__text">
                            Dragoon:
                            <span>
                                #293
                            </span>
                        </p>
                        <div class="collection-content-item__row collection-content-item-row">
                            <p class="collection-content-item-row__text">
                                24h Earnings
                            </p>
                            <div class="collection-content-item-row__box">
                                <img class="collection-content-item-row__box-img"
                                    src="../../public/img/collection-content-item-img.png" alt="img">
                                0.025
                            </div>
                        </div>
                        <button class="collection-content-item__link btn" type="button">
                            <span>
                                Unfreeze
                            </span>
                            <span>
                                Unfreeze
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="collection__info collection-info">
            <h1 class="collection-info__title">
                Collections
            </h1>
            <div class="collection-info__items collection-info-items">
                <div class="collection-info-items__item collection-info-items-item" data-filter=".item-first">
                    <img class="collection-info-items-item__img" src="../../public/img/collection-info-img-1.png" alt="img">
                    <div class="collection-info-items-item__box collection-info-items-item-box">
                        <h3 class="collection-info-items-item-box__title">
                            Tribe Dragonz Gen-0
                        </h3>
                        <p class="collection-info-items-item-box__count">
                            2 items
                        </p>
                    </div>
                </div>
                <div class="collection-info-items__item collection-info-items-item" data-filter=".item-second">
                    <img class="collection-info-items-item__img" src="../../public/img/collection-info-img-2.png" alt="img">
                    <div class="collection-info-items-item__box collection-info-items-item-box">
                        <h3 class="collection-info-items-item-box__title">
                            Tribe Dragonz Gen-1
                        </h3>
                        <p class="collection-info-items-item-box__count">
                            3 items
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/vars';
.collection-body {
    .main-top {
        margin-bottom: 0;
        justify-content: unset;
    }
}

.main {}

.collection {
    width: 100%;
    @include adaptiv-value("padding-top", 50, 20, 1);
    @include adaptiv-value("padding-bottom", 60, 20, 1);
    display: flex;
    padding-left: 65px;
    margin-left: 10px;
    @include adaptiv-value("gap", 50, 0, 1);
    border-left: 1px solid rgba(0, 0, 0, 0.14);
}

.collection-content {
    @include adaptiv-value("padding-top", 40, 30, 1);
    flex-grow: 1;
    max-width: 561px;
    min-width: 561px;
    &__title {
        font-weight: 700;
        @include adaptiv-value("font-size", 35, 25, 1);
        @include adaptiv-value("line-height", 38, 28, 1);
        color: #000000;
        margin-bottom: 35px;
        @include adaptiv-value("margin-bottom", 35, 20, 1);
    }

    &__link {
        @include adaptiv-value("margin-bottom", 40, 20, 1);
        display: block;
        min-width: 100%;
        max-width: 100%;
    }

    &__item--first {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }

    &__item--second {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }

    .btn {
        span {
            min-width: 100%;
            max-width: 100%;
            @include adaptiv-value("padding-top", 25, 15, 1);
            @include adaptiv-value("padding-bottom", 25, 15, 1);
        }
    }

    &__inner {}
}

.collection-content-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    align-items: center;

    &__text {
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 18, 15, 1);
        color: #070707;
    }

    &__info {
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 18, 15, 1);
        color: #070707;
        font-weight: 500;
    }
}

.collection-content-box:nth-child(5) {
    @include adaptiv-value("margin-bottom", 55, 30, 1);
}

.collection-content-row {
    @include adaptiv-value("margin-bottom", 45, 20, 1);
    display: flex;
    align-items: center;
    @include adaptiv-value("gap", 25, 15, 1);

    &__box {
        display: flex;
        align-items: center;
        @include adaptiv-value("gap", 13, 5, 1);
        &-img {
            @include adaptiv-value("width", 32, 25, 1);
        }
        svg {
            @include adaptiv-value("width", 32, 25, 1);
        }
    }

    &__box-text {
        font-weight: 700;
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 18, 15, 1);
    }

    &__button {
        background: #E2E2E2;
        border-radius: 7px;
        @include adaptiv-value("padding", 10, 5, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            transition: transform 0.3s;
            @include adaptiv-value("width", 24, 20, 1);
            @include adaptiv-value("height", 24, 20, 1);
        }
        &:hover {
            svg {
                transform: rotate(360deg);
            }
        }
    }
}

.collection-content-item {
    max-width: 273px;
    background: #FFFFFF;
    box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.13);
    border-radius: 13px;
    padding: 23px 23px 19px 23px;
    position: relative;
    border: 3px solid rgba(255, 0, 147, 0.14);
    //&::before {
    //    content: '';
    //    width: 102%;
    //    border-radius: 13px;
    //    height: 102%;
    //    top: -3px;
    //    position: absolute;
    //    bottom: -3px;
    //    left: -3px;
    //    right: -3px;
    //    background: linear-gradient(225deg, #7000FF 30%, rgba(255, 0, 147, 0.14) 70%);
    //    z-index: -1;   
    //}
    &__img {
        width: 227px;
        height: 207px;
        @include adaptiv-value("margin-bottom", 23, 15, 1);
    }

    &__text {
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 18, 15, 1);
        color: #070707;
        @include adaptiv-value("margin-bottom", 18, 10, 1);

        span {
            font-weight: 700;
            margin-left: 5px;
        }
    }

    .btn {
        span {
            padding: 13px;
        }
    }
}

.collection-content-item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include adaptiv-value("margin-bottom", 40, 20, 1);

    &__text {
        @include adaptiv-value("font-size", 14, 12, 1);
        @include adaptiv-value("line-height", 16, 14, 1);
        color: #070707;
    }

    &__box {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        line-height: 13px;
        text-align: right;
        font-weight: 700;
        background: linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%), #070707;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    &__box-img {
        width: 16px;
        height: 16px;
    }
}

.collection-info {
    &__title {
        @include adaptiv-value("margin-bottom", 20, 10, 1);
        font-weight: 700;
        @include adaptiv-value("font-size", 35, 25, 1);
        @include adaptiv-value("line-height", 38, 29, 1);
        color: #070707;
        margin-left: 22px;
    }
}

.collection-info-items {
    margin-right: -25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .mixitup-control-active {
        background: rgba(150, 150, 150, 0.22);
    }
}

.collection-info-items-item {
    cursor: pointer;
    padding: 21px 23px 21px 28px;
    @include adaptiv-value("padding-top", 21, 10, 1);
    @include adaptiv-value("padding-bottom", 21, 10, 1);
    @include adaptiv-value("padding-left", 28, 10, 1);
    @include adaptiv-value("padding-right", 23, 10, 1);
    display: flex;
    @include adaptiv-value("gap", 27, 10, 1);
    border-radius: 23px;
    align-items: center;
    transition: background 0.3s;
    &:hover {
        background: rgba(150, 150, 150, 0.22);
    }
    &__img {
        width: 134px;
        height: 122px;
    }
}

.collection-info-items-item-box {
    &__title {
        font-weight: 700;
        @include adaptiv-value("font-size", 23, 15, 1);
        @include adaptiv-value("line-height", 28, 18, 1);
        @include adaptiv-value("margin-bottom", 12, 5, 1);
        color: #2C2C2C;
        max-width: 195px;
    }

    &__count {
        font-weight: 700;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 18, 14, 1);
        background: linear-gradient(90.95deg, #FF0093 0.33%, #FF0093 99.38%), linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%), #2C2C2C;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        max-width: 100px;
    }
}

@media (max-width: 1300px) {
    .collection-info-items {
        margin-right: unset;
    }
}

@media (max-width: 1250px) {
    .collection {
        justify-content: space-between;
    }
    .collection-info-items-item {
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .collection-info-items-item-box__count {
        margin-left: auto;
        margin-right: auto;
    }
    .collection-info-items-item-box__title {
        margin-left: auto;
        margin-right: auto;
    }
    .collection-content {
        max-width: unset;
    }
    .collection-content__item--first {
        justify-content: space-between;
    }
    .collection-content__item--second {
        justify-content: space-between;
    }
}

@media (max-width: 1150px) {
    .collection-content {
        min-width: unset;
    }
}

@media (max-width: 1000px) {
    .collection {
        margin-left: unset;
        border: unset !important;
        padding-left: unset;
    }
    .collection-body .main-top{
        gap: 0;
    }
}

@media (max-width: 900px) {
    .collection-info__title {
        margin-left: unset;
    }
    .collection {
        flex-direction: column;
    }
    .collection-info {
        order: -1;
    }
    .collection-info-items-item  {
        flex-direction: row;
    }
    .collection-info-items-item-box__title {
        margin-left: unset;
        text-align: left;
        margin-right: unset;
    }

    .collection-info-items-item-box__count {
        margin-left: unset;
        text-align: left;
        margin-right: unset;
    }
}

@media (max-width: 600px) {
    .collection-content__item--first {
        justify-content: center;
    }
    .collection-content__item--second {
        justify-content: center;
    }
    .collection-content-item {
        width: 100%;
        max-width: unset;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .collection-content-item__img {
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .collection-content-item-row {
        gap: 10px;
    }
}
</style>