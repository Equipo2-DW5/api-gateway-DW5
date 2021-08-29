
const reservationsResolver = require('./reservationsResolver');
const usersResolver = require('./usersResolver');
const usersAuthResolver = require('./usersAuthResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(reservationsResolver, usersAuthResolver, usersResolver);


module.exports = resolvers;