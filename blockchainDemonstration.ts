// Import required packages for generating and manipulating hashes
import { sha256 } from "ethereum-cryptography/sha256";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";

// Function to generate hash for given data
const generateHash = (data: string): string => {
  // Convert data to UTF-8 format
  const stringToUTF8: Uint8Array = utf8ToBytes(data);
  // Generate hash using SHA-256 algorithm
  const hash: Uint8Array = sha256(stringToUTF8);
  // Convert hash to hexadecimal format
  const hexaDecimalHash: string = toHex(hash);
  // Return the hexadecimal hash
  return hexaDecimalHash;
};

// Define a class for a single block in the blockchain
class Block {
  data: string;
  hash: string;
  prevHash: string;

  constructor(data: string, hash: string, prevHash: string) {
    // Initialize the data, hash, and previous hash for the block
    this.data = data;
    this.hash = hash;
    this.prevHash = prevHash;
  }
}

// Define a class for the blockchain itself
class Blockchain {
  chain: Array<Block>;

  constructor() {
    // Initialize the blockchain with a genesis block
    this.chain = [];
    // Generate a hash for the previous hash of the genesis block
    const genesisPrevHash = generateHash("0000");
    // Generate a hash for the data of the genesis block
    const genesisHash = generateHash("genesis");
    // Create the genesis block with the generated hashes and data
    const genesisBlock = new Block(
      "genesis data",
      genesisHash,
      genesisPrevHash
    );
    // Add the genesis block to the blockchain
    this.chain.push(genesisBlock);
  }

  // Add a new block to the blockchain
  addBlock(data: string) {
    // Get the hash of the previous block in the chain
    const prevHash = this.chain[this.chain.length - 1].hash;
    // Generate a hash for the current block using the previous hash and current data
    const hash = generateHash(data + prevHash);
    // Create a new block with the generated hash and previous hash, and the current data
    const newBlock = new Block(data, hash, prevHash);
    // Add the new block to the blockchain
    this.chain.push(newBlock);
  }

  // Print the blockchain in dictionary format
  printChain() {
    // Convert the blockchain to a dictionary format for printing
    const chainDict = this.chain.map((block) => {
      return {
        data: block.data,
        hash: block.hash,
        prevHash: block.prevHash,
      };
    });
    // Print the blockchain in dictionary format
    console.log(chainDict);
  }
}

// Create a new blockchain and add some blocks to it
const myFirstBlockchain = new Blockchain();
myFirstBlockchain.addBlock("1");
myFirstBlockchain.addBlock("2");
myFirstBlockchain.addBlock("3");

// Print the blockchain
myFirstBlockchain.printChain();
