const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "day unusual amused brave science victory hockey speak consider horror fabric size";

module.exports = {
	networks: {
		rinkeby: {
		  provider: function() {
			return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/92e69eb0a5b24a369be735a06ccc4438")
		  },
		  network_id: 4
		}
	},
	  plugins: [
		'truffle-plugin-verify'
	  ],
	  api_keys: {
		etherscan: 'E922FWSPPUDIACSAJXBFDJ5FWBE5ZW4JTS'
	  }
}
