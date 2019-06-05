const crypto = require("crypto");
var transaction = require('./transaction.js')
var blocks = require('./block.js')

function createHash(){
    const sha256Hash = data => crypto.createHash("sha256").
    update(data).digest('hex');
    return sha256Hash;  
}

function createTransaction(sender, receiver, amount){
    let txn1 = new transaction(sender,receiver,amount);
    return txn1;
}

/*function createBlock(){
    let block = new blocks();
    block.add_transaction(txn1)
    block.add_transaction(txn2)
    console.log('Added Transaction length --'+block.get_transaction_count())
    block.finalize();
    console.log(block._hash)
    console.log("Before Validate Block:"+block.validate())
    let txn3 = new transaction("run", "test", 5);
    console.log("\n  3 " + txn3.toString());
    block.add_transaction(txn3)
    console.log("After Validate Block:"+block.validate())
}
*/

printMsg = function() {
    
    console.log("This is a message from the demo package");

    //Hashing - immutable and infeasible to change

    const sha256Hash = createHash();
    
    console.log("\n Hash for 'blockchain is simple(lower)' :"
    +sha256Hash('blockchain is simple'));
    console.log("\n Hash for 'blockchain is Simple(upper)' :"
    +sha256Hash('blockchain is Simple'));

    //jsonpickle - serialize and deserialize

    //Transaction
    let txn1 = createTransaction("test", "example", 10);
    console.log("\n  1 " + txn1);
    let txn2 = createTransaction("example", "check", 20);
    console.log("\n  2 " + txn2.toString());

    //Block - Block are a way of organizing the transaction that also store some metadata
    let block = new blocks();
    block.add_transaction(txn1)
    block.add_transaction(txn2)
    console.log('Added Transaction length --'+block.get_transaction_count())
    block.finalize();
    console.log(block._hash)
    console.log("Before Validate Block:"+block.validate())
    let txn3 = createTransaction("run", "test", 5);
    console.log("\n  3 " + txn3.toString());
    block.add_transaction(txn3)
    console.log("After Validate Block:"+block.validate())

}
exports.createHash = createHash;
exports.createTransaction = createTransaction;
printMsg();
