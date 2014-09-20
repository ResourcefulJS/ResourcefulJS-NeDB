var resourcefuljs = require("resourcefuljs");
var DatastoreAdapter = resourcefuljs.DatastoreAdapter;

function NeDBAdapter() {

}
NeDBAdapter.prototype = Object.create(DatastoreAdapter.prototype);
NeDBAdapter.prototype.constructor = NeDBAdapter;

module.exports = NeDBAdapter;

