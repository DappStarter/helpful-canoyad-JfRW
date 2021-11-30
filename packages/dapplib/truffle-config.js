require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth mirror column hunt slam flip genre'; 
let testAccounts = [
"0x8ebf3de74cb8a47919524f64d5b3cb7a7a9b2fd14ca872a18412d2a3f5830df5",
"0x7694866a33e0a930c976e71635e2183335fd8a0c231502264fe7e5b71626da93",
"0xd75b88a9143d876cffc00961f271bce65fa3bc549cab064b6d910fc20d7e85b0",
"0x291a7657111af6eccf7cdd80f1d544f0bc064dd84aef1d57823662d0d15e1298",
"0x05288b57fb48ec30258c0bf372ad5e1efe70019eea0b1ae0da36c19ee5c18fdb",
"0x7255ea237dc6c9dffa280afd4323611b90e76186069b141347f82e3289918ed9",
"0xb6ceb52a74114c9fc85c666be35b7562a6926f6e648394ff7f44dbdfb8c391f5",
"0x7e60fe106e143d843327f49c354bb4537113af3a02dd6194acf248000d90b170",
"0x3ea7b9c33c949c247f4e281420a493a4a26965bd95ed8654da17d3300907e5d4",
"0x73cd7e8f4ee9bd49e958369f21f92bdbaad93423c6ff9ea559e1684b1e83fb2c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

