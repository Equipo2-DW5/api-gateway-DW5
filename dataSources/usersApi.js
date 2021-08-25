const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../source/server');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.users_api_url;
    }

    async authenticate(credentials) {
      console.log(credentials)
        return await this.post('/token/', {...credentials});
    }

    async refreshToken(refresh) {
        return await this.post('/token/refresh/', {refresh});
    }
}

module.exports = UsersAPI;