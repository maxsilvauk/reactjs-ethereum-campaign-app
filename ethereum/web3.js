import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // The metamask seed phrase & the rinkeby network
    // we want to connect to.
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/835fef3984d746eb9ccd66dc5ef48254'
    );
    web3 = new Web3(provider);
}

export default web3;