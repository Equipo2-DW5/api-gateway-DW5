const usersAuthResolver = {
    Mutation: {
        authenticate: (_, { credentials }, { dataSources }) => dataSources.usersAPI.authenticate(credentials),
        refreshToken: (_, { refresh }, { dataSources }) => dataSources.usersAPI.refreshToken(refresh),
    }
};

module.exports = usersAuthResolver;