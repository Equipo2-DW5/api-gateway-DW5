
const reservationsResolver = require('./reservationsResolver');
const laboratoriesResolver=require('./laboratoriesResolver');
const usersResolver = require('./usersResolver');
const usersAuthResolver = require('./usersAuthResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(reservationsResolver, usersAuthResolver, usersResolver, laboratoriesResolver);


module.exports = resolvers;