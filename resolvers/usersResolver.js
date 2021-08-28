const usersResolver = {
    Query: {
        userByEmail: (_, { email }, { dataSources, infoToken }) => {
            if(infoToken.role != 'Estudiante')
                return dataSources.usersAPI.userByEmail(email)
            else 
                return null;
        }
    },
    Mutation: {
        createUser: (_, { input }, { dataSources }) => {
            return dataSources.usersAPI.createUser(input)
        },
        updateUser: (_, { input }, { dataSources, infoToken }) => {
            if(input.email == infoToken.email)
                return dataSources.usersAPI.updateUser(input)
            else   
                return null
        },
        deleteUser: (_, { email }, { dataSources, infoToken }) => {
            if(infoToken.role != 'Estudiante')
                return dataSources.usersAPI.deleteUser(email)
            else
                return null
        }
    }
};

module.exports = usersResolver;