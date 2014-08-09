var resourcefuljsNeDB = require("../lib/resourcefuljs-nedb");
var NeDBAdapter = require("../lib/nedb-adapter");

describe("ResourcefulJS-NeDB", function() {

    it("should return NeDBAdapter class", function() {
        resourcefuljsNeDB.should.equal(NeDBAdapter);
    });

});

