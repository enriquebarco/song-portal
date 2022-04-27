const main = async () => {
    const songContractFactory = await hre.ethers.getContractFactory("SongPortal");
    const songContract = await songContractFactory.deploy();
    await songContract.deployed();
    console.log("Contract deployed to:", songContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating "Uncaught Fatal Exception" error
    }
};

runMain();