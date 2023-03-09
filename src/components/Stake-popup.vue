<script>
export default {
    name: 'Stake-popup.vue',
    data() {
        return {
            drag: 5,
            tickets: 1,
            stateOfDaysRow: false
        }
    },
    props: ['ticketsCountValue', 'dragCountValue'],
    mounted() {
        this.tickets = this.ticketsCountValue
        this.drag = this.dragCountValue
    },
    watch: {
        ticketsCountValue: {
            handler() {
                this.tickets = this.ticketsCountValue
            },
            deep: true
        },
        dragCountValue: {
            handler() {
                this.drag = this.dragCountValue
            },
            deep: true
        }
    },
    methods: {
        addDays() {
            if ( this.stateOfDaysRow == false ) {
                this.stateOfDaysRow = true

            } else {
                this.stateOfDaysRow = false
            }
            if (this.stateOfDaysRow) {
                this.$refs.rowText1.classList.remove('stake-popup-row__text--acitve')
                this.$refs.rowText2.classList.add('stake-popup-row__text--acitve')
                this.$refs.stakePopup.classList.add('stake-popup-row--active')
                this.drag *= 1.25
                this.tickets *= 1.25
            } else {
                this.$refs.rowText2.classList.remove('stake-popup-row__text--acitve')
                this.$refs.rowText1.classList.add('stake-popup-row__text--acitve')
                this.$refs.stakePopup.classList.remove('stake-popup-row--active')
                this.drag = this.dragCountValue
                this.tickets = this.ticketsCountValue
            }
        }
    },
}

</script>

<template>
    <div class="main__stake-popup stake-popup" id="stake-popup">
        <h2 class="stake-popup__title">
            Stake2Earn
        </h2>
        <p class="stake-popup__text">
            You can lock your NFTs for 14 or 28 days <br>
            28 days lockup will increase you rewards by 25%
        </p>
        <button ref="stakePopup" class="stake-popup__row stake-popup-row" type="button" @click="addDays">
            <p ref="rowText1" class="stake-popup-row__text stake-popup-row__text--acitve">
                14d
            </p>
            <p ref="rowText2" class="stake-popup-row__text">
                28d
            </p>
        </button>
        <p class="stake-popup-row__info">
            Estimated reward: {{ this.drag }} $Drag / {{ this.tickets }} Ticket(s) each 24h
        </p>
        <div class="stake-popup-row__buttons">
            <button class="stake-popup-row__buttons-btn btn" type="button">
                <span>
                    Stake
                </span>
                <span>
                    Stake
                </span>
            </button>
            <button class="stake-popup-row__buttons-btn btn fancybox-button" data-fancybox-close type="button">
                <span>
                    Cancel
                </span>
                <span>
                    Cancel
                </span>
            </button>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/vars';

.fancybox-content {
    display: flex !important;

    .fancybox-close-small {
        display: none;
    }
}

.fancybox-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.stake-popup {
    width: 853px;
    height: 549px;
    @include adaptiv-value("padding-top", 60, 20, 1);
    @include adaptiv-value("padding-bottom", 60, 20, 1);
    @include adaptiv-value("padding-right", 75, 20, 1);
    @include adaptiv-value("padding-left", 75, 20, 1);
    background: #FFFFFF;
    border-radius: 21px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    &__title {
        font-weight: 700;
        @include adaptiv-value("font-size", 35, 20, 1);
        @include adaptiv-value("line-height", 38, 24, 1);
        @include adaptiv-value("margin-bottom", 40, 20, 1);
        text-align: center;
        color: #000000;
    }

    &__text {
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 22, 18, 1);
        @include adaptiv-value("margin-bottom", 30, 20, 1);
        max-width: 400px;
        text-align: center;
        color: #070707;
    }
}

.stake-popup-row {
    background: #FDFDFD;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15), inset 0px 4px 15px rgba(0, 0, 0, 0.15);
    @include adaptiv-value("border-radius", 234, 40, 1);
    @include adaptiv-value("padding-top", 27, 20, 1);
    @include adaptiv-value("padding-bottom", 27, 20, 1);
    @include adaptiv-value("padding-right", 105, 35, 1);
    @include adaptiv-value("padding-left", 105, 35, 1);
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    width: 100%;
    height: 130px;
    max-height: 130px;
    position: relative;
    margin-bottom: 20px;

    &::before {
        content: '';
        height: 100%;
        width: 50%;
        top: 0;
        left: 0;
        bottom: 1;
        position: absolute;
        background: linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%), #F7F7F7;
        @include adaptiv-value("border-radius", 234, 40, 1);
        z-index: 1;
        transition: transform 0.3s;
    }

    &__text {
        font-weight: 700;
        @include adaptiv-value("font-size", 76, 30, 1);
        line-height: 0px;
        color: #D8D8D8;
        z-index: 2;
        transition: color 0.3s;
    }

    &__text--acitve {
        color: #fff;
    }

    &__info {
        @include adaptiv-value("font-size", 14, 12, 1);
        @include adaptiv-value("line-height", 18, 14, 1);
        @include adaptiv-value("margin-bottom", 35, 20, 1);
        text-align: center;
        padding: 10px 20px;
        color: #000000;
        background: #F2F2F2;
        border-radius: 23px;
    }

    &__buttons {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &__buttons-btn:nth-child(1) {
        width: 253px;
        max-width: 253px;

        span {
            font-weight: 700;
            font-size: 14px;
            line-height: 13px;
            text-align: center;
            background: linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%);
            border-radius: 152px;
            width: 253px;
            max-width: 253px;
            color: #FFFFFF;
            padding: 25px;
        }
    }

    &__buttons-btn:nth-child(2) {
        width: 253px;
        max-width: 253px;
        height: 60px;
        background: unset;

        &:hover {
            span {
                border: 3px solid transparent;
            }
        }

        span {
            width: 253px;
            max-width: 253px;
            padding: 25px;
            border-radius: 152px;
            background: unset;
            background: linear-gradient(90.95deg, #7000FF 0.33%, #FF0093 99.38%), #FFFFFF;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            border: 3px solid #7000FF;
            max-height: 60px;
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        span:nth-child(2) {
            color: #fff;
            -webkit-text-fill-color: unset;
            border: 0px solid transparent;
        }

    }
}

.stake-popup-row--active {
    &::before {
        transform: translateX(100%);
    }
}

@media (max-width: 650px) {
    .stake-popup-row__buttons {
        flex-direction: column;
    }
}</style>


