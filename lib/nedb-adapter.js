var resourcefuljs = require("resourcefuljs");
var DatastoreAdapter = resourcefuljs.DatastoreAdapter;

function NeDBAdapter() {

}


//NeDBAdapter.prototype = DatastoreAdapter;
//NeDBAdapter.prototype.constructor = NeDBAdapter;
NeDBAdapter.prototype = _.create(DatastoreAdapter.prototype, { 'constructor': NeDBAdapter });
//NeDBAdapter.prototype = Object.crate(DatastoreAdapter);

module.exports = NeDBAdapter;

