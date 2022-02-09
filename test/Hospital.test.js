const { assert } = require("chai")

const Hospital = artifacts.require("./Hospital.sol")

require('chai')
    .use(require('chai-as-promised'))
    .should

contract('Hospital', ([deployer, doctor]) => {
    let hospital

    before(async () => {
        hospital = await Hospital.deployed()
    })

    describe('deployment', async () => {
        it('Deployment successful', async () => {
            const address = hospital.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, "")
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('Has a name', async () => {
            const name = await hospital.name()
            assert.equal(name, 'National Hospital')
        })
    })

    describe('Doctors', async () => {
        let result,doctorCount
        before(async () => {
            result = await hospital.addDoctor('Doc1', web3.utils.toWei('1','Ether'), "Gynaecologist", {from: doctor})
            doctorCount = await hospital.doctorCount()
        })

        it('Added a Doctor', async () => {
            assert.equal(doctorCount, 1)
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(),doctorCount.toNumber(), 'id is correct')
            assert.equal(event.doctor_acc , doctor , 'Account is correct')
            assert.equal(event.name ,'Doc1' , 'name is correct')
            assert.equal(event.fees , web3.utils.toWei('1', 'Ether').toString() , 'fees is correct')
            assert.equal(event.special , 'Gynaecologist' , 'Specialisation is correct')
            // assert.equal(event.completed , false , 'completed is correct')
        })

        // it('Donates Amount', async () => {
        //     await donations.donate(1, {from: donator, value: web3.utils.toWei('5', 'Ether')})
        //     await donations.donate(1, {from: donator, value: web3.utils.toWei('10', 'Ether')})
        //     console.log(result.logs[0].args.raised.toString())
        // })
    })
})