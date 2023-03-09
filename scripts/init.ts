import fs from "fs/promises";
import path from "path";
import prettier from "prettier";
import { ethers } from "ethers";

const INIT_CONFIG = {
  bundlerUrl: "https://node.stackup.sh/v1/rpc/2255300aa9ffc8aebbacfc5c65742102f0d6bcd315209e5c089663fcc9ded1bc",
  rpcUrl: "https://polygon-mumbai.g.alchemy.com/v2/0kFFJ5PD_pfXoXpbSYHdoVKJzlpj_hN8",
  signingKey: new ethers.Wallet(ethers.utils.randomBytes(32)).privateKey,
  entryPoint: "0x0576a174D229E3cFA37253523E645A78A0C91B57",
  simpleAccountFactory: "0x71D63edCdA95C61D6235552b5Bc74E32d8e2527B",
  paymasterUrl: "",
};
const CONFIG_PATH = path.resolve(__dirname, "../config.json");

async function main() {
  return fs.writeFile(
    CONFIG_PATH,
    prettier.format(JSON.stringify(INIT_CONFIG, null, 2), { parser: "json" })
  );
}

main()
  .then(() => console.log(`Config written to ${CONFIG_PATH}`))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
