<script>

import BalanceSwiper from './Balance-swiper.vue';
import NftItem from './Nft-item.vue';

export default {
    name: 'Balance-content.vue',
    components: {
        BalanceSwiper,
        NftItem
    },
    data() {
        return {
            itemsInfoOne: [
                { number: 289, value: 'selected', id: '0', order: 0 },
                { number: 290, value: 'unselected', id: '1', order: 1 },
                { number: 291, value: 'unselected', id: '2', order: 2 },
                { number: 292, value: 'unselected', id: '3', order: 3 },
                { number: 293, value: 'unselected', id: '4', order: 4 },
                { number: 294, value: 'unselected', id: '5', order: 5 },
            ],
            itemsInfoTwo: [
                { number: 295, value: 'selected', id: '6', order: 0 },
                { number: 296, value: 'unselected', id: '7', order: 1 },
                { number: 297, value: 'unselected', id: '8', order: 2 },
                { number: 298, value: 'unselected', id: '9', order: 3 },
                { number: 299, value: 'unselected', id: '10', order: 4 },
            ],
            activeSwiperItem: 1,
            selectedAll: false,
        }
    },
    methods: {
        addItemStateOne(item) {
            let copyOfItemsInfo = this.itemsInfoOne
            if (copyOfItemsInfo[item.order].value == 'selected') {
                copyOfItemsInfo[item.order].value = 'unselected'
            } else {
                copyOfItemsInfo[item.order].value = 'selected'
            }
            this.itemsInfoOne = copyOfItemsInfo
        },
        addItemStateTwo(item) {
            let copyOfItemsInfo = this.itemsInfoTwo
            if (copyOfItemsInfo[item.order].value == 'selected') {
                copyOfItemsInfo[item.order].value = 'unselected'
            } else {
                copyOfItemsInfo[item.order].value = 'selected'
            }
            this.itemsInfoTwo = copyOfItemsInfo
        },
        getInfoAboutSwiperItemState(elem) {
            if (elem.classList.contains('balance-top-content-swiper-box--first')) {
                this.activeSwiperItem = 1
            } else if (elem.classList.contains('balance-top-content-swiper-box--second')) {
                this.activeSwiperItem = 2
            }
        },
        SelectAllItems() {
            let copyOfFirstItemsInfo = this.itemsInfoOne
            let copyOfSecondItemsInfo = this.itemsInfoTwo
            if (this.selectedAll == true) {
                this.selectedAll = false
                this.$refs.selectAllButton.classList.remove('balance-row__buttons-btn--active')
                if (this.activeSwiperItem == 1) {
                    for (let item of copyOfFirstItemsInfo) {
                        item.value = 'unselected'
                    }
                }
                if (this.activeSwiperItem == 2) {
                    for (let item of copyOfSecondItemsInfo) {
                        item.value = 'unselected'
                    }
                }
            } else {
                this.selectedAll = true
                this.$refs.selectAllButton.classList.add('balance-row__buttons-btn--active')
                if (this.activeSwiperItem == 1) {
                    for (let item of copyOfFirstItemsInfo) {
                        item.value = 'selected'
                    }
                }
                if (this.activeSwiperItem == 2) {
                    for (let item of copyOfSecondItemsInfo) {
                        item.value = 'selected'
                    }
                }
            }
        },
        addInfoAboutDragToParent() {
            this.$emit('addInfoAboutDragFromChild', this.dragDollarsCounter, this.ticketsCounter )
        }
    },
    mounted() {
        var mixer = mixitup('.balance__inner', {
            load: {
                filter: '.item-first'
            }
        });
    },
    computed: {
        dragDollarsCounter() {
            if (this.activeSwiperItem == 1) {
                let count = 0
                for (let item of this.itemsInfoOne) {
                    if (item.value == 'selected') {
                        count += 5
                    }
                }
                return count
            }
            if (this.activeSwiperItem == 2) {
                let count = 0
                for (let item of this.itemsInfoTwo) {
                    if (item.value == 'selected') {
                        count += 5
                    }
                }
                return count
            }
        },
        ticketsCounter() {
            if (this.activeSwiperItem == 1) {
                let count = 0
                for (let item of this.itemsInfoOne) {
                    if (item.value == 'selected') {
                        count += 1
                    }
                }
                return count
            }
            if (this.activeSwiperItem == 2) {
                let count = 0
                for (let item of this.itemsInfoTwo) {
                    if (item.value == 'selected') {
                        count += 1
                    }
                }
                return count
            }
        }

    }
}

</script>

<template>
    <div class="main__balance balance">
        <div class="balance__top balance-top">
            <div class="balance-top__info balance-top-info">
                <h2 class="balance-top-info__title">
                    Stake2Earn
                </h2>
                <div class="balance-top-info__row">
                    <p class="balance-top-info__row-text">
                        Staked NFTs:
                    </p>
                    <p class="balance-top-info__row-count">
                        2
                    </p>
                </div>
                <div class="balance-top-info__row">
                    <p class="balance-top-info__row-text">
                        Drag 24h Earnings:
                    </p>
                    <p class="balance-top-info__row-count">
                        15
                    </p>
                </div>
                <div class="balance-top-info__row">
                    <p class="balance-top-info__row-text">
                        Tickets 24h Earnings:
                    </p>
                    <p class="balance-top-info__row-count">
                        3
                    </p>
                </div>
                <div class="balance-top-info__row">
                    <p class="balance-top-info__row-text">
                        Total Drag Claimed:
                    </p>
                    <p class="balance-top-info__row-count">
                        47
                    </p>
                </div>
                <div class="balance-top-info__row">
                    <p class="balance-top-info__row-text">
                        Total Tickets Claimed:
                    </p>
                    <p class="balance-top-info__row-count">
                        12
                    </p>
                </div>
                <button class="balance-top-info__button btn" type="button">
                    <span>
                        Claim Rewards
                    </span>
                    <span>
                        Claim Rewards
                    </span>
                </button>
            </div>
            <div class="balance-top__content balance-top-content">
                <div class="balance-top-content__body balance-top-content-body">
                    <h1 class="balance-top-content-body__title">
                        My Balance
                    </h1>
                    <div class="balance-top-content-body__box">
                        <p class="balance-top-content-body__box-text">
                            Available NFTs:
                        </p>
                        <p class="balance-top-content-body__box-count">
                            2
                        </p>
                    </div>
                    <div class="balance-top-content-body__box">
                        <p class="balance-top-content-body__box-text">
                            Blood:
                        </p>
                        <p class="balance-top-content-body__box-count">
                            15
                        </p>
                    </div>
                    <div class="balance-top-content-body__box">
                        <p class="balance-top-content-body__box-text">
                            Tickets:
                        </p>
                        <p class="balance-top-content-body__box-count">
                            3
                        </p>
                    </div>
                </div>
                <BalanceSwiper @clickOnItem="getInfoAboutSwiperItemState" />
            </div>
        </div>
        <div class="balance__row balance-row">
            <div class="balance-row__info balance-row-info">
                <div class="balance-row-info__item">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_174_764)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.10051 23.8995C1.475 21.274 0 17.713 0 14C0 10.287 1.475 6.72601 4.10051 4.10051C6.72601 1.475 10.287 0 14 0C17.713 0 21.274 1.475 23.8995 4.10051C26.525 6.72601 28 10.287 28 14ZM21.0525 8.6975C20.9275 8.57293 20.7787 8.47485 20.6149 8.40913C20.4511 8.3434 20.2758 8.31138 20.0993 8.31497C19.9229 8.31857 19.749 8.3577 19.588 8.43004C19.427 8.50239 19.2823 8.60645 19.1625 8.736L13.0848 16.4797L9.422 12.8153C9.17319 12.5834 8.84411 12.4572 8.50409 12.4632C8.16406 12.4692 7.83963 12.6069 7.59916 12.8474C7.35869 13.0879 7.22094 13.4123 7.21494 13.7523C7.20894 14.0924 7.33516 14.4214 7.567 14.6703L12.1975 19.3025C12.3222 19.427 12.4708 19.5251 12.6343 19.591C12.7978 19.6569 12.9728 19.6891 13.1491 19.6859C13.3253 19.6826 13.499 19.6439 13.66 19.572C13.8209 19.5001 13.9657 19.3966 14.0857 19.2675L21.0718 10.535C21.3099 10.2874 21.4415 9.95623 21.4382 9.61268C21.4349 9.26912 21.2971 8.94055 21.0543 8.6975H21.0525Z"
                                fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.10051 23.8995C1.475 21.274 0 17.713 0 14C0 10.287 1.475 6.72601 4.10051 4.10051C6.72601 1.475 10.287 0 14 0C17.713 0 21.274 1.475 23.8995 4.10051C26.525 6.72601 28 10.287 28 14ZM21.0525 8.6975C20.9275 8.57293 20.7787 8.47485 20.6149 8.40913C20.4511 8.3434 20.2758 8.31138 20.0993 8.31497C19.9229 8.31857 19.749 8.3577 19.588 8.43004C19.427 8.50239 19.2823 8.60645 19.1625 8.736L13.0848 16.4797L9.422 12.8153C9.17319 12.5834 8.84411 12.4572 8.50409 12.4632C8.16406 12.4692 7.83963 12.6069 7.59916 12.8474C7.35869 13.0879 7.22094 13.4123 7.21494 13.7523C7.20894 14.0924 7.33516 14.4214 7.567 14.6703L12.1975 19.3025C12.3222 19.427 12.4708 19.5251 12.6343 19.591C12.7978 19.6569 12.9728 19.6891 13.1491 19.6859C13.3253 19.6826 13.499 19.6439 13.66 19.572C13.8209 19.5001 13.9657 19.3966 14.0857 19.2675L21.0718 10.535C21.3099 10.2874 21.4415 9.95623 21.4382 9.61268C21.4349 9.26912 21.2971 8.94055 21.0543 8.6975H21.0525Z"
                                fill="url(#paint0_linear_174_764)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_174_764" x1="2.12693e-07" y1="5.67567" x2="28.1867"
                                y2="6.14292" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7000FF" />
                                <stop offset="1" stop-color="#FF0093" />
                            </linearGradient>
                            <clipPath id="clip0_174_764">
                                <rect width="28" height="28" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="balance-row-info__item-text">
                        Available
                    </p>
                </div>
                <div class="balance-row-info__item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_174_772)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.279 1.66961C12.0999 1.59784 11.9001 1.59784 11.721 1.66961L2.769 5.25011L12 8.94161L21.231 5.25011L12.279 1.66961ZM22.5 6.35861L12.75 10.2586V22.1416L22.5 18.2416V6.36011V6.35861ZM11.25 22.1431V10.2571L1.5 6.35861V18.2431L11.25 22.1431ZM11.1645 0.27611C11.7008 0.0616091 12.2992 0.0616091 12.8355 0.27611L23.529 4.55411C23.668 4.60983 23.7872 4.7059 23.8711 4.82994C23.9551 4.95399 24 5.10033 24 5.25011V18.2431C23.9998 18.5428 23.9098 18.8356 23.7417 19.0838C23.5735 19.3319 23.3348 19.5239 23.0565 19.6351L12.279 23.9461C12.0999 24.0179 11.9001 24.0179 11.721 23.9461L0.945 19.6351C0.666377 19.5241 0.427414 19.3322 0.258963 19.0841C0.0905126 18.8359 0.000309494 18.543 0 18.2431L0 5.25011C3.48599e-05 5.10033 0.0449156 4.95399 0.128861 4.82994C0.212805 4.7059 0.331969 4.60983 0.471 4.55411L11.1645 0.27611Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_174_772">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="balance-row-info__item-text">
                        Staked
                    </p>
                </div>
                <button class="balance-row-info__bnt" type="button">
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
            <div class="balance-row__buttons" @click="addInfoAboutDragToParent">
                <button class="balance-row__buttons-btn btn" @click="SelectAllItems" ref="selectAllButton">
                    <span>
                        Select all
                    </span>
                    <span>
                        Select all
                    </span>
                    <span>
                        Unselect all
                    </span>
                    <span>
                        Unselect all
                    </span>
                </button>
                <a data-fancybox href="#stake-popup" class="balance-row__buttons-btn btn">
                    <span>
                        Stake selected
                    </span>
                    <span>
                        Stake selected
                    </span>
                </a>
            </div>
        </div>
        <div class="balance__rewards balance-rewards">
            <div class="balance-rewards__item">
                <p class="balance-rewards__item-text">
                    Each NFT earns 5 $Drag / 1 Ticket(s) each 24 hours
                </p>
            </div>
            <div class="balance-rewards__item">
                <p class="balance-rewards__item-text">
                    Estimated reward: <span>{{ dragDollarsCounter }}</span> $Drag / <span>{{ ticketsCounter }}</span>
                    Ticket(s)
                    each 24 hours
                </p>
            </div>
        </div>
        <div class="balance__inner">
            <div class="balance__item mix item-first">
                <NftItem v-for="item of this.itemsInfoOne" :key="item.id" :itemsInfo="item"
                    @clickOnChildButton="addItemStateOne" />
            </div>
            <div class="balance__item mix item-second">
                <NftItem v-for="item of this.itemsInfoTwo" :key="item.id" :itemsInfo="item"
                    @clickOnChildButton="addItemStateTwo" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/vars';

.balance {
    padding-bottom: 25px;
    padding-left: 65px;
    border-left: 1px solid rgba(0, 0, 0, 0.14);

    &__item {
        display: grid;
        gap: 20px;
        grid-template-columns: 273px 273px 273px;
    }
}

.balance-top {
    align-items: flex-start;
    display: flex;
    gap: 35px;
    @include adaptiv-value("margin-bottom", 50, 0, 1);
    @include adaptiv-value("padding-top", 40, 10, 1);
}

.balance-top-info {
    background: #FFFFFF;
    box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 39px 50px 0 37px;
    @include adaptiv-value("padding-top", 39, 20, 1);
    @include adaptiv-value("padding-bottom", 0, 0, 1);
    @include adaptiv-value("padding-right", 50, 20, 1);
    @include adaptiv-value("padding-left", 37, 20, 1);
    min-width: 397px;

    &__title {
        font-weight: 700;
        @include adaptiv-value("font-size", 35, 20, 1);
        @include adaptiv-value("line-height", 38, 24, 1);
        color: #000000;
        @include adaptiv-value("margin-bottom", 40, 20, 1);
    }

    &__row {
        @include adaptiv-value("margin-bottom", 22, 15, 1);
        display: flex;
        justify-content: space-between;
    }

    &__row:nth-child(6) {
        margin-bottom: 10px;
    }

    &__row-text {
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 18, 15, 1);
        color: #070707;

    }

    &__row-count {
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 18, 15, 1);
        color: #070707;
        font-weight: 700;
    }

    &__button {}

    .btn {
        transform: translateY(50%);

        span {
            border-radius: 152px;
            @include adaptiv-value("padding-top", 25, 15, 1);
            @include adaptiv-value("padding-bottom", 25, 15, 1);
            min-width: 320px;
        }
    }
}

.balance-top-content {}

.balance-top-content-body {
    @include adaptiv-value("padding-top", 40, 20, 1);

    &__title {
        font-weight: 700;
        @include adaptiv-value("font-size", 35, 20, 1);
        @include adaptiv-value("line-height", 38, 24, 1);
        @include adaptiv-value("margin-bottom", 20, 15, 1);
        color: #000000;
    }

    &__box {
        display: flex;
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 18, 15, 1);
        color: #070707;
        min-width: 200px;
        max-width: 200px;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    &__box:nth-child(4) {
        margin-bottom: 30px;
    }

    &__box-text {}

    &__box-count {
        font-weight: 700;
    }
}

.balance-row {
    display: flex;
    gap: 135px;
    align-items: center;
    @include adaptiv-value("margin-bottom", 35, 30, 1);

    &__buttons {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__buttons-btn:nth-child(1) {
        position: relative;

        span:nth-child(3) {
            opacity: 0;
            box-shadow: 0px 2px 8px rgb(0 0 0 / 0%);
            font-weight: 700;
            font-size: 14px;
            line-height: 13px;
            text-align: center;
            background: linear-gradient(90.95deg, #7000ff 0.33%, #ff0093 99.38%);
            border-radius: 7px;
            padding: 12px;
            max-width: 185px;
            min-width: 185px;
            color: #ffffff;
            position: absolute;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            border-radius: 189px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.3s;
        }

        span:nth-child(4) {
            box-shadow: 0px 2px 8px rgb(0 0 0 / 0%);
            font-weight: 700;
            font-size: 14px;
            line-height: 13px;
            text-align: center;
            border-radius: 7px;
            padding: 12px;
            max-width: 185px;
            min-width: 185px;
            color: #ffffff;
            position: absolute;
            opacity: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            border-radius: 189px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.3s;
            background: linear-gradient(90.95deg, #581ea4 0.33%, #d12589 99.38%);
        }

        &:active {
            &::before {
                border: 1px solid #fff;
            }
        }

        &::before {
            content: '';
            border: 1px solid transperent;
            z-index: 10;
            position: absolute;
            width: 98%;
            height: 90%;
            border-radius: 189px;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

    }

    &__buttons-btn--active {
        span:nth-child(1) {
            opacity: 0;
        }
        span:nth-child(2) {
            opacity: 0;
        }
        span:nth-child(3) {
            opacity: 1 !important;
        }
        span:nth-child(1) {
            z-index: -1 !important;
            opacity: 0 !important;
            transition: unset !important;
        }
        span:nth-child(2) {
            z-index: -1 !important;
            opacity: 0 !important;
            transition: unset !important;
        }
        &:hover {
            span:nth-child(1) {
                z-index: -1 !important;
                opacity: 0 !important;
                transition: unset !important;
            }
            span:nth-child(2) {
                z-index: -1 !important;
                opacity: 0 !important;
                transition: unset !important;
            }
            span:nth-child(3) {
                opacity: 0 !important;
                transition: opacity 0.3s;
            }
            span:nth-child(4) {
                opacity: 1 !important;
                transition: opacity 0.3s;
            }
        }
    }

    .btn {
        span {
            padding: 15px;
            border-radius: 189px;
        }
    }
}

.balance-row-info {
    display: flex;
    align-items: center;

    &__item {
        display: flex;
        align-items: center;
        @include adaptiv-value("gap", 15, 5, 1);
        @include adaptiv-value("margin-right", 40, 20, 1);
    }

    &__item:nth-child(1) {
        .balance-row-info__item-text {
            background: linear-gradient(90.95deg, #FF0093 0.33%, #FF0093 99.38%), linear-gradient(90.95deg, #000000 0.33%, #070707 99.38%), linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%), #070707;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }

        svg {
            @include adaptiv-value("width", 28, 20, 1);
            @include adaptiv-value("height", 28, 20, 1);
        }
    }

    &__item:nth-child(2) {
        @include adaptiv-value("margin-right", 45, 20, 1);

        svg {
            @include adaptiv-value("width", 24, 20, 1);
            @include adaptiv-value("height", 24, 20, 1);
        }
    }

    &__item-text {
        font-weight: 700;
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 18, 16, 1);
        color: #000;
    }

    &__bnt {
        background: #E2E2E2;
        border-radius: 7px;
        @include adaptiv-value("padding", 10, 5, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            svg {
                transform: rotate(360deg)
            }
        }
        svg {
            transition: transform 0.3s;
            @include adaptiv-value("width", 24, 20, 1);
            @include adaptiv-value("height", 24, 20, 1);
        }
    }
}

.balance-rewards {
    max-width: 860px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    &__item {
        background: #F2F2F2;
        border-radius: 189px;
        padding: 10px 20px;
    }

    &__item-text {
        @include adaptiv-value("font-size", 14, 13, 1);
        @include adaptiv-value("line-height", 16, 15, 1);
        text-align: center;
        color: #000000;

    }
}

@media (max-width: 1150px) {
    .balance-top {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .balance {
        padding-left: 30px;
        width: 100%;
    }

    .balance-rewards {
        justify-content: space-between;
        @include adaptiv-value("gap", 30, 15, 1);
        max-width: unset;
    }

    .balance-top-info {
        width: 100%;
    }

    .balance-top-info__button {
        min-width: 320px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    .balance-top-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include adaptiv-value("gap", 50, 30, 1);
    }

    .balance-row {
        @include adaptiv-value("gap", 30, 15, 1);
        justify-content: space-between;
    }

    .balance__item {
        justify-content: space-between;
    }
}

@media (max-width: 1100px) {
    .balance-row {
        flex-direction: column;
    }

    .balance-rewards {
        flex-direction: column;
    }

    .balance__item {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}

@media (max-width: 1000px) {
    .balance {
        margin-left: unset;
        margin-right: unset;
        padding-left: unset;
        border: unset !important;
    }

    .balance-row {
        flex-direction: row;
    }

    .balance-rewards {
        flex-direction: row;
    }

    .balance__item {
        display: grid;
        flex-wrap: unset;
        justify-content: space-between;
    }
}

@media (max-width: 900px) {
    .balance-rewards {
        flex-direction: column;
    }

    .balance__item {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media (max-width: 850px) {
    .balance-row {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 700px) {
    .balance-top-content {
        flex-direction: column;
    }

    .balance-top-content-body__box:nth-child(4) {
        margin-bottom: 0;
    }
}

@media (max-width: 600px) {
    .balance-nft-item {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .balance-nft-item__text {
        align-self: unset;
    }
}

@media (max-width: 500px) {
    .balance-top-info__button {
        max-width: 100%;
        min-width: 100%;

        span {
            max-width: 100% !important;
            min-width: 100% !important;
        }
    }

    .balance-top-info {
        min-width: unset;
    }
}

@media (max-width: 450px) {
    .balance-body .main {
        max-width: 100%;
        width: 100%;
    }

    .balance-top-content {
        max-width: 100%;
    }

    .balance-top-content-body {
        width: 100%;
    }

    .balance-top-content-body__box {
        justify-content: space-between;
        width: 100%;
        max-width: 100%;
    }

    .balance-row__buttons {
        flex-direction: column;
    }
}</style>