const testRoutes = require('./app-routes');

module.exports = function(app, db){
    testRoutes(app, db);
    //other route groups could go here in the future
}

