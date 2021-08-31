
const reservationsTypeDefs = require('./reservationsTypeDef');
const usersAuthTypeDefs = require('./usersAuthTypeDefs');
const usersTypeDefs = require('./usersTypeDefs');
const laboratoriesTypeDefs=require('./laboratoriesTypeDef')

const schemasArrays = [ reservationsTypeDefs, usersAuthTypeDefs, usersTypeDefs,laboratoriesTypeDefs];

module.exports = schemasArrays;