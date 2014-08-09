var resourcefuljs = require("resourcefuljs");
var DatastoreAdapter = resourcefuljs.DatastoreAdapter;

var NeDBAdapter = require("../lib/nedb-adapter");

describe("NeDBAdapter", function() {

    it("should be a class", function() {
        NeDBAdapter.should.be.a("function");
        NeDBAdapter.prototype.constructor.should.equal(NeDBAdapter);
    });

    describe("instance", function() {

        it("should be instance of NeDBAdapter", function() {
            var adapter = new NeDBAdapter();

            adapter.should.be.instanceof(NeDBAdapter);
        });

        it("should be instance of DatastoreAdapter", function() {
            var adapter = new NeDBAdapter();

            adapter.should.be.instanceof(DatastoreAdapter);
        });

    });

});

