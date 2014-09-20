global.chai = require("chai");
global.assert = global.chai.assert;
global.expect = global.chai.expect;
global.should = global.chai.should();

global.sinon = require("sinon");

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
