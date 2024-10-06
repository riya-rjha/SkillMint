async function main() {
	const SkillMint = await ethers.getContractFactory("SkillMint");
	const skillMint = await SkillMint.deploy();
	await skillMint.deployed();
	console.log("SkillMint deployed to:", skillMint.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
