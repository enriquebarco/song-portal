const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const songContractFactory = await hre.ethers.getContractFactory("SongPortal");
    const songContract = await songContractFactory.deploy();
    await songContract.deployed();

    console.log("Contract deployed to:", songContract.address);
    console.log("Contract deployed by:", owner.address);

    let songCount = await songContract.getTotalSongs();

    //sending myself a song
    let songTxn = await songContract.song();
    await songTxn.wait();

    //A random person sending me a song
    songTxn = await songContract.connect(randomPerson).song();
    await songTxn.wait();

    songCount = await songContract.getTotalSongs();

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