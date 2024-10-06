require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
	solidity: "0.8.19",
	networks: {
		holesky: {
			url: `https://eth-holesky.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
};
