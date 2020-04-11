var Blockchain = require('./blockchain.js');

const bitcoin = new Blockchain();
console.log(bitcoin);

const previousBlockHash = '71H3U4H1U3KG4301RY30F';
const currentBlockData = [
    {
        amount: 10,
        sender: '949184H1T4UQHR9FU134',
        recipient: '83491Y4HIUTG1497GH'
    }, 
    {
        amount: 30,
        sender: 'ASFDFA4UQHR9FU134',
        recipient: 'IJHORQGBJKAPRVJVN'
    }
];
console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));