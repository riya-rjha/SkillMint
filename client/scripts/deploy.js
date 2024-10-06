async function main() {
	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account:", deployer.address);

	const MyContract = await ethers.getContractFactory("SkillMint"); // Replace with your contract name
	const myContract = await MyContract.deploy();

	console.log("Contract address:", await myContract.getAddress());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
