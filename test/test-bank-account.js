const assert = require('assert');
const BankAccount = require('../app/BankAccount'); 

describe('BankAccount', () => {
    describe('#Current', () => {
        it('should return the current balance', () => {
            let amount = 3000;
            const bankAccount = new BankAccount(amount);
            assert.equal(bankAccount.getAmount(), amount);
        })
    })
    
    describe('#Append', () => {
        it('should return the addittion of a new amount to the balance', () => {
            let amount1 = 3000;
            const bankAccount = new BankAccount(amount1);
            let amount2 = 5000;
            let amount3 = -2000;
            assert.equal(amount1+amount2, bankAccount.append(amount2)); //deberia regresar la suma de amount 1 y 2 
            assert.equal(amount1, bankAccount.append(amount3)); //deberia regresar amount1
        })
    })

    describe('#Substract', () => {
        it('should return the substraction of an amount to the current balance', () => {
            let amount1 = 3000;
            const bankAccount = new BankAccount(amount1);
            let amount2 = 5000;
            let amount3 = -2000;
            assert.equal(amount1-amount2, bankAccount.substract(amount2)); //deberia regresar la resta de amount 1 y 2 
            assert.equal(amount1, bankAccount.substract(amount3)); //deberia regresar amount1
        })
    })

    describe('#Merge', () => {
        it('should return the merge two Accounts', () => {
            //Declarar bankAccounts
            let amount1 = 3000;
            const bankAccount = new BankAccount(amount1);
            let amount2 = 5000;
            const bankAccount2 = new BankAccount(amount2);

            //Darles historial crediticio
            let amount3 = 6000;
            let amount4 = 2000;
            bankAccount.append(amount3);
            bankAccount2.substract(amount4);

            //Merge de las cuentas
            bankAccount.merge(bankAccount2);

            //prueba
            assert.deepEqual([
                {type: "append", amount: amount3, balance: amount1 + amount3},
                {type: "substract", amount: amount4, balance: amount2 - amount4}
            ], bankAccount.history())
        })
    })

    describe('#History', () => {
        it('should return a history of all movements', () => {
            let amount1 = 3000;
            const bankAccount = new BankAccount(amount1);
            let amount2 = 5000;
            let amount3 = 2000;
            bankAccount.append(amount2);
            bankAccount.substract(amount3);
            assert.deepEqual([
                {type: "append", amount: amount2, balance: amount1 + amount2},
                {type: "substract", amount: amount3, balance: amount1 + amount2 - amount3}
            ], bankAccount.history());
        })
    })
})
