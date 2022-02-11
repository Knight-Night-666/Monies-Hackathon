 const { assert } = require("chai")

const Hospital = artifacts.require("./Hospital.sol")

require('chai')
    .use(require('chai-as-promised'))
    .should

    contract('Hospital', ([deployer,seller,buyer]) => {
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

    describe('doctors', async () => {
        let result,doctorCount
        before(async () => {
            result = await hospital.addDoctor('Doc1', web3.utils.toWei('1','Ether'), "Gynaecologist", {from:seller})
            doctorCount = await hospital.doctorCount()
        })

        // it('Added a Doctor', async () => {
        //     assert.equal(doctorCount, 1)
        //     const event = result.logs[0].args
        //     assert.equal(event.id.toNumber(),doctorCount.toNumber(), 'id is correct')
        //     assert.equal(event.doctor_acc , doctor , 'Account is correct')
        //     assert.equal(event.name ,'Doc1' , 'name is correct')
        //     assert.equal(event.fees , web3.utils.toWei('1', 'Ether').toString() , 'fees is correct')
        //     assert.equal(event.special , 'Gynaecologist' , 'Specialisation is correct')
        //     assert.equal(event.purchased,false,"purchased is correct")
        //     // assert.equal(event.completed , false , 'completed is correct')
        // })

        // it('Donates Amount', async () => {
        //     await donations.donate(1, {from: donator, value: web3.utils.toWei('5', 'Ether')})
        //     await donations.donate(1, {from: donator, value: web3.utils.toWei('10', 'Ether')})
        //     console.log(result.logs[0].args.raised.toString())
        // })
        it('creates doctor', async () => {
            //SUCCESS:
            assert.equal(doctorCount, 1)
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(),doctorCount.toNumber(), 'id is correct')
            assert.equal(event.name ,'Doc1' , 'name is correct')
            assert.equal(event.fees , web3.utils.toWei('1', 'Ether') , 'fees is correct')
            assert.equal(event.special , 'Gynaecologist' , 'Specialisation is correct')
            assert.equal(event.doctor_acc , seller , 'Account is correct')
            assert.equal(event.purchased,false,"purchased is correct")

            console.log(event.id,event.name,event.fees,event.special,event.doctor_acc,event.purchased)
            // // FAILURE: Product must have a name
            // await await hospital.addDoctor('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
            //  // FAILURE: Product must have a price
            // await await hospital.addDoctor('Doc1', 0, { from: seller }).should.be.rejected;
            // // assert.equal(event.completed , false , 'completed is correct')
        })
        //ye hagra hai bc patani kyu
        it('lists doctors',async()=>{
            const event = await hospital.doctors(doctorCount)
            assert.equal(event.id.toNumber(),doctorCount.toNumber(), 'id is correct')
            assert.equal(event.name.toString() ,'Doc1' , 'name is correct')
            assert.equal(event.fees , web3.utils.toWei('1', 'Ether') , 'fees is correct')
            assert.equal(event.purchased,false,"purchased is correct")
            assert.equal(event.doctor_acc , seller , 'Account is correct')
            assert.equal(event.special , 'Gynaecologist' , 'Specialisation is correct')
            console.log(event.id,event.name,event.fees,random.special,event.doctor_acc,event.purchased)
        })
        it('sells doctors',async()=>{
            //Track the doctor balance before purchase
            let oldDoctorBalance
            oldDoctorBalance = await web3.eth.getBalance(seller)
            oldDoctorBalance = new web3.util.BN(oldDoctorBalance)

            //SUCCESS: patient makes purchase
            result = await hospital.addAppointment(doctorCount,{from: buyer,value: web3.utils.toWei('1', 'Ether') })
            //Check logs
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(),doctorCount.toNumber(), 'id is correct')
            
            assert.equal(event.name ,'Doc1' , 'name is correct')
            assert.equal(event.fees , web3.utils.toWei('1', 'Ether') , 'fees is correct')
            assert.equal(event.special , 'Gynaecologist' , 'Specialisation is correct')
            assert.equal(event.doctor_acc , buyer , 'Account is correct')
            assert.equal(event.purchased,true,"purchased is correct")

            //CHECK IF doctor GOT FUNDS
            let newDoctorBalance
            newDoctorBalance = await web3.eth.getBalance(seller)
            newDoctorBalance = new web3.util.BN(newDoctorBalance)

            let price
            price = web.util.toWei('1','Ether')
            price = new web3.utils.BN(price)
            
            const expectedBalance = oldDoctorBalance.add(price)
            assert.equal(newDoctorBalance.toString(),expectedBalance.toString())
            console.log(oldDoctorBalance,newDoctorBalance,price)

        })
        
    })
    



})