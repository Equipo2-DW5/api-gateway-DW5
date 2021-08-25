const { ApolloServer } = require('apollo-server');

const typeDefs = require('../typeDefs/server')
const resolvers = require('../resolvers/index');
const UsersApi = require('../dataSources/usersApi');
const ReservationAPI = require('../dataSources/reservationsApi');
const authentication = require('../utils/authentication');
console.log("R",new UsersApi())
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
      usersAPI: new UsersApi(),
        reservationAPI: new ReservationAPI()
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
