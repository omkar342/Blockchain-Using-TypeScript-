# TypeScript Blockchain Demo

This is a TypeScript project that demonstrates how a simple blockchain works under the hood. It implements a basic blockchain with the following features:

- Blocks are created with a data (a string), a previous hash (a string), and a hash (also a string).
- The first block (the genesis block) is created with a predefined hash value.
- Subsequent blocks are created with their data and the hash of the previous block concatenated together and hashed again.
- The blockchain itself is just an array of blocks.

## Installation

To run this project, you will need Node.js and npm (Node Package Manager) installed on your system.

1. Clone this repository to your local machine:

```
git clone https://github.com/omkar342/Blockchain-Using-TypeScript-
```

2. Navigate to the project directory:

```
cd Blockchain-Using-TypeScript-
```

3. Install the required dependencies:

```
npm install
```

4. Compile the TypeScript code to JavaScript:

```
tsc ./blockcahinDemonstration.ts
```

5. Run the Javascript code

```
node ./blockcahinDemonstration.js
```

## Output

This will display the blockchain in the console.

```
[
  {
    data: 'genesis data',
    hash: 'aeebad4a796fcc2e15dc4c6061b45ed9b373f26adfc798ca7d2d8cc58182718e',
    prevHash: '9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0'
  },
  {
    data: '1',
    hash: '6c36f48205be90c4b6d73568fb006ad39f4bab9a76a95d62b6ffb3c8d2d2155b',
    prevHash: 'aeebad4a796fcc2e15dc4c6061b45ed9b373f26adfc798ca7d2d8cc58182718e'
  },
  {
    data: '2',
    hash: '3a929f96d29c00c342a6f5858333cab36a1c38729859b5dedfa8eafecee67684',
    prevHash: '6c36f48205be90c4b6d73568fb006ad39f4bab9a76a95d62b6ffb3c8d2d2155b'
  },
  {
    data: '3',
    hash: 'a46e1f400c3a383716a522238e7370660dcc9da0aa88e5d1445621076b1eb63c',
    prevHash: '3a929f96d29c00c342a6f5858333cab36a1c38729859b5dedfa8eafecee67684'
  }
]
```

## Usage

You can modify the `blockchainDemonstration.ts` file to add more blocks to the blockchain or change the data of existing blocks. The `Blockchain` class provides the following methods:

- `addBlock(data: string)`: Adds a new block to the blockchain with the given data.
- `printChain()`: Prints the entire blockchain to the console in JSON format.

## Credits

This project was created by Omkar[https://github.com/omkar342]. Feel free to use it as a starting point for your own blockchain projects.
