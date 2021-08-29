const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../source/server');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.usersApiUrl;
    }

    async authenticate(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/token/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({refresh: token})));
        return await this.post(`/token/refresh/`, token);
    }

    async userByEmail(email) {
        return await this.get(`/find/${email}`);
    }

    async createUser(input) {
        input = new Object(JSON.parse(JSON.stringify(input)));
        return await this.post(`/create/`, input);
    }

    async updateUser(input) {
        input = new Object(JSON.parse(JSON.stringify(input)));
        return await this.post(`/update/`, input);
    }

    async deleteUser(email) {
        email = new Object(JSON.parse(JSON.stringify({ email })));
        console.log(email)
        return await this.post(`/delete/`, email)
    }
};

module.exports = UsersAPI;