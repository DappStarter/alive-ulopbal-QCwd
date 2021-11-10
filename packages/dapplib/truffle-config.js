require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski struggle renew saddle arrange gesture ghost army general'; 
let testAccounts = [
"0x112b1541af0cc8891f9715a44202c10988dbde216d2008a4b0aea7cf4ad9a044",
"0x4f881fe6de11c22fc7e91500135d9fd3f4285c24ca6b64f57372751022ff554d",
"0x1dea805ae397d862154eb9eb0fce1b0c69400a024d1814b625157f7320a28af0",
"0xe81cc3c42053bb29d04a127d85efdbf5f7c5eeac986fab7d61f47af90d4ffec3",
"0xbc2cd88e9f63df0bbf54f4e3947764a579364405f3a815c414cf4a585f8436c1",
"0xa2c70119e9858921e20965a4374b670fa6cadbcfd2ab614794f3033332583bed",
"0xb940fa593bbc75e50d0ef889897cfe73bd08641738d0c5149eba5c0116f939d6",
"0x1ab743849adb1d36111e61d96875c54853894e5188c658f040b64095ae18def4",
"0xa553090074b02e51720e6da5e67c4c5c04b3962635d42f43947cae540d7e56cd",
"0x72c42c7a1c260fa65434907e4a82e12cdcdb1ea5ed98d05f4f8b58872b2362a1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

