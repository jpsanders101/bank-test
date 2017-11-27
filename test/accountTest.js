var chai = require('chai');
var assert = chai.assert;
var Account = require('../src/account.js').Account;

describe('Account', function () {
  it('initializes with a balance of 0', function() {
    var account = new Account();
    assert(account.balance === 0);
  });
});