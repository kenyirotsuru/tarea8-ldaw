class BankAccount{
    constructor(amount){
        this.amount = amount;
        this.history = []
    }

    getAmount(){
        return this.amount;
    }

    append(amount2){
        if(amount2 > 0){
            this.amount += amount2;
            this.history.push({type: "append", amount: amount2, balance: this.amount});
        }
        return this.amount;
    }

    substract(amount2){
        if(amount2 > 0){
            this.amount -= amount2;
            this.history.push({type: "substract", amount: amount2, balance: this.amount});
        }
        return this.amount;
    }

    getHistory(){
        return this.history;
    }

    merge(bankAccount2){
        this.amount += bankAccount2.amount
        for(let index = 0; index < bankAccount2.history.length; index++) {
            this.history.push(bankAccount2.history[index]);
        }
        return this;
    }
}

module.exports = BankAccount;