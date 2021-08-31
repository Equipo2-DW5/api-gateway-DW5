const { ApolloServer } = require('apollo-server');

const typeDefs = require('../typeDefs/server')
const resolvers = require('../resolvers/index');
const UsersApi = require('../dataSources/usersApi');
const ReservationAPI = require('../dataSources/reservationsApi');
const LaboratoriesAPI=require('../dataSources/LaboratoriesApi');
const authentication = require('../utils/authentication');
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        usersAPI: new UsersApi(),
        reservationAPI: new ReservationAPI(),
        laboratoriesAPI: new LaboratoriesAPI()
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
