<script>
import { watch } from 'vue'

export default {
    name: 'Nft-item.vue',
    props: ['itemsInfo'],
    data() {
        return {
            imageUrl: ''
        }
    },
    mounted() {
        this.imageUrl = new URL(`../../public/img/nft-item-img-${this.itemsInfo.id}.png`, import.meta.url)
        if (this.itemsInfo.value == 'selected') {
            this.$refs.balanceItem.classList.add('balance-nft-item--selected')
        } else {
            this.$refs.balanceItem.classList.add('balance-nft-item--unselected')
        }
    },
    watch: {
        itemsInfo: {
            handler() {
                if (this.itemsInfo.value == 'selected') {
                    this.$refs.balanceItem.classList.remove('balance-nft-item--unselected')
                    this.$refs.balanceItem.classList.add('balance-nft-item--selected')
                } else {
                    this.$refs.balanceItem.classList.remove('balance-nft-item--selected')
                    this.$refs.balanceItem.classList.add('balance-nft-item--unselected')
                }
            },
            deep: true,
        }
    },
}

</script>

<template>
    <div ref="balanceItem" class="balance__nft-item balance-nft-item" @click="this.$emit('clickOnChildButton', this.itemsInfo)">
        <img :src="this.imageUrl" class="balance-nft-item__img" alt="img">
        <p class="balance-nft-item__text">
            Dragoon:
            <span>{{ this.itemsInfo.number }}</span>
        </p>
        <button class="balance-nft-item__btn btn">
            <span>
                Select
            </span>
            <span>
                Select
            </span>
            <span>
                Unselect
            </span>
            <span>
                Unselect
            </span>
        </button>
    </div>
</template>

<style lang="scss">
@import '../assets/scss/vars';

.balance-nft-item {
    cursor: pointer;
    background: #FFFFFF;
    box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.13);
    border-radius: 13px;
    padding: 23px 23px 21px 23px;
    max-width: 273px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid rgba(255, 0, 147, 0.14);
    transition: border 0.3s;

    &__img {
        width: 227px;
        height: 207px;
        border-radius: 19px;
        @include adaptiv-value("margin-bottom", 23, 15, 1);
    }

    &__text {
        align-self: flex-start;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 18, 14, 1);
        @include adaptiv-value("margin-bottom", 23, 10, 1);
        color: #070707;

        span {
            font-weight: 700;
        }
    }

    &__btn {

        span:nth-child(3) {
            opacity: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.3s;
            background: linear-gradient(90.95deg, #10C200 0.33%, #00BFC2 99.38%);
        }
        span:nth-child(4) {
            opacity: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.3s;
            background: linear-gradient(90.95deg, #22a016 0.33%, #17888a 99.38%);
        }
    }

    .btn {
        min-width: 100%;
        max-width: 100%;

        span {
            min-width: 100%;
            max-width: 100%;
        }
    }
}
.balance-nft-item--selected {
    border: 3px solid #10C200;
    .balance-nft-item__btn {
        span:nth-child(3) {
            opacity: 1;
        }
        span:nth-child(1) {
            opacity: 0 !important;
        }
        span:nth-child(2) {
            opacity: 0 !important;
        }
        &:hover {
            span:nth-child(1) {
                opacity: 0 !important;
            }
            span:nth-child(2) {
                opacity: 0 !important;
            }
            span:nth-child(3) {
                transition: opacity 0.3s;
                opacity: 0;
            }
            span:nth-child(4) {
                transition: opacity 0.3s;
                opacity: 1;
            }
        }    
    }   
}
</style>


