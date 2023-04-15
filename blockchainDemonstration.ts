import { sha256 } from "ethereum-cryptography/sha256";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";
class BlockcahinDemonstration {
  data: string;
  hash: string;
  prev_hash: string;

  constructor(data: string, hash: string, prev_hash: string) {
    this.data = data;
    this.hash = hash;
    this.prev_hash = prev_hash;
  }
}

const hashGenerator = (data: string): string => {
  const stringToUTF8: Uint8Array = utf8ToBytes(data);
  const hash: Uint8Array = sha256(stringToUTF8);
  const hexaDecimalHash: string = toHex(hash);
  return hexaDecimalHash;
};

const dataInHexaDecimalHash = hashGenerator("Hello, world!");

console.log(dataInHexaDecimalHash);
