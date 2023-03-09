import { createApp } from 'vue'
import App from './App.vue'

// import SolanaWallets from 'solana-wallets-vue';

// import 'solana-wallets-vue/styles.css';

// import {
//   PhantomWalletAdapter,
//   SlopeWalletAdapter,
//   SolflareWalletAdapter,
// } from '@solana/wallet-adapter-wallets';

// const walletOptions = {
//   wallets: [
//     new PhantomWalletAdapter(),
//     new SlopeWalletAdapter(),
//     new SolflareWalletAdapter({ network: 'devnet' }),
//   ],
//   autoConnect: true,
// }

import router from './router' // <---
// SolanaWallets, walletOptions, 
createApp(App).use(router).mount('#app')


