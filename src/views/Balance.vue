<script>

import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';
import BalanceContent from '../components/Balance-content.vue';
import StakePopup from '../components/Stake-popup.vue';

export default {
    components: {
        Header,
        Menu,
        BalanceContent,
        StakePopup
    },
    data() {
        return {
            dragCountValue: 5,
            ticketsCountValue: 1,
        }
    },
    methods: {
        addInfoAboutDragToChild(dragCount, ticketsCount) {
            this.dragCountValue = dragCount
            this.ticketsCountValue = ticketsCount
        }
    }
}

</script>

<template>
    <div class="big-wrapper">
        <Header />
        <div class="main">
            <div class="container">
                <section class="main__top main-top">
                    <Menu />
                    <BalanceContent @addInfoAboutDragFromChild="addInfoAboutDragToChild" />
                </section>
            </div>
        </div>
        <StakePopup :dragCountValue="this.dragCountValue" :ticketsCountValue="this.ticketsCountValue" />
    </div>
</template>

<style lang="scss">
@import '../assets/scss/style.scss';

.balance-body {
    .main-top {
        margin-bottom: 0;
        gap: 10px;
    }
}
</style>