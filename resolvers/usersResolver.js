const usersResolver = {
  Mutation: {
    authenticate: (_, { credentials }, { dataSources }) => {
        console.log("resolver", dataSources)
        console.log("resolver", dataSources.usersAPI)
        return dataSources.usersAPI.authenticate(credentials);
      },
      refreshToken: (_, { refresh }, { dataSources }) => {
        return dataSources.usersAPI.refreshToken(refresh)
      },
  }
};

module.exports = usersResolver;