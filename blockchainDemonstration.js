"use strict";
exports.__esModule = true;
// Import required packages for generating and manipulating hashes
var sha256_1 = require("ethereum-cryptography/sha256");
var utils_1 = require("ethereum-cryptography/utils");
// Function to generate hash for given data
var generateHash = function (data) {
    // Convert data to UTF-8 format
    var stringToUTF8 = (0, utils_1.utf8ToBytes)(data);
    // Generate hash using SHA-256 algorithm
    var hash = (0, sha256_1.sha256)(stringToUTF8);
    // Convert hash to hexadecimal format
    var hexaDecimalHash = (0, utils_1.toHex)(hash);
    // Return the hexadecimal hash
    return hexaDecimalHash;
};
// Define a class for a single block in the blockchain
var Block = /** @class */ (function () {
    function Block(data, hash, prevHash) {
        // Initialize the data, hash, and previous hash for the block
        this.data = data;
        this.hash = hash;
        this.prevHash = prevHash;
    }
    return Block;
}());
// Define a class for the blockchain itself
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        // Initialize the blockchain with a genesis block
        this.chain = [];
        // Generate a hash for the previous hash of the genesis block
        var genesisPrevHash = generateHash("0000");
        // Generate a hash for the data of the genesis block
        var genesisHash = generateHash("genesis");
        // Create the genesis block with the generated hashes and data
        var genesisBlock = new Block("genesis data", genesisHash, genesisPrevHash);
        // Add the genesis block to the blockchain
        this.chain.push(genesisBlock);
    }
    // Add a new block to the blockchain
    Blockchain.prototype.addBlock = function (data) {
        // Get the hash of the previous block in the chain
        var prevHash = this.chain[this.chain.length - 1].hash;
        // Generate a hash for the current block using the previous hash and current data
        var hash = generateHash(data + prevHash);
        // Create a new block with the generated hash and previous hash, and the current data
        var newBlock = new Block(data, hash, prevHash);
        // Add the new block to the blockchain
        this.chain.push(newBlock);
    };
    // Print the blockchain in dictionary format
    Blockchain.prototype.printChain = function () {
        // Convert the blockchain to a dictionary format for printing
        var chainDict = this.chain.map(function (block) {
            return {
                data: block.data,
                hash: block.hash,
                prevHash: block.prevHash
            };
        });
        // Print the blockchain in dictionary format
        console.log(chainDict);
    };
    return Blockchain;
}());
// Create a new blockchain and add some blocks to it
var myFirstBlockchain = new Blockchain();
myFirstBlockchain.addBlock("1");
myFirstBlockchain.addBlock("2");
myFirstBlockchain.addBlock("3");
// Print the blockchain
myFirstBlockchain.printChain();
