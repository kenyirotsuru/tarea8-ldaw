class BankAccount{
    constructor(amount){
        this.amount = amount;
        this.history = []
    }

    getAmount(){
        return this.amount;
    }

    append(amount){
        this.amount += amount;
        this.history.push({type: "append", amount: amount});
    }

    getHistory(){
        return this.history();
    }


}

module.exports = BankAccount;