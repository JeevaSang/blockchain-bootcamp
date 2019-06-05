//var assert = require(chai).assert;
var assert = require('assert');
var index_page = require('../index.js');
const crypto = require("crypto");


describe('asyn module',function(){
    const sha256Hash = index_page.createHash();    
    it('should be success in Hash for blockchain is simple(lower)',function(){       
        assert.equal(sha256Hash('test'),sha256Hash('test'));
        assert.notEqual(sha256Hash('test'),sha256Hash('Test'))
    });
    it('should be success in Hash for blockchain is simple(upper)',function(){       
        assert.equal(sha256Hash('Test'),sha256Hash('Test'));
        assert.notEqual(sha256Hash('Test'),sha256Hash('test'))
    });
    it('should be success in create Transaction data',function(){ 
        let txnObj = index_page.createTransaction("test", "example", 10);
        assert.equal(txnObj.toString(),"Transaction: test sent 10 units to example");
        assert.notEqual(txnObj.toString(),"Transaction: test sent 20 units to example");
        let txnObj1 = index_page.createTransaction("example", "check", 20);
        assert.equal(txnObj1.toString(),"Transaction: example sent 20 units to check");
    });
})
