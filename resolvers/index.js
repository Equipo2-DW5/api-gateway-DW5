
const reservationsResolver = require('./reservationsResolver');
const usersResolver = require('./usersResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(reservationsResolver, usersResolver);


module.exports = resolvers;