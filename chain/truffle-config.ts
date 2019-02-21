import Web3 = require("web3");

const Web3Url = process.env.WEB3_URL;

const Web3Factory = (url: string) => {
  if (!url) {
    throw Error("Environment variable \"WEB3_URL\" not set");
  }
  if (url.startsWith("ws")) {
    return new Web3.providers.WebsocketProvider(url);
  } else if (url.startsWith("http")) {
    return new Web3.providers.HttpProvider(url);
  }
  throw Error(`Unsupported web3 URL: ${url}`);
};

module.exports = {
  contracts_directory: "./src/contracts",
  migrations_directory: "./build/migrations",
  networks: {
    ci: {
      gasPrice: "0x0",
      network_id: "*",
      provider: () => Web3Factory(Web3Url)
    },
    develop: {
      gasPrice: "0x0",
      network_id: "*",
      provider: () => Web3Factory("http://localhost:9545"),
    }
  },
  test_directory: "./src/test",
  test_file_extension_regexp: /.*\.spec\.ts$/
};
