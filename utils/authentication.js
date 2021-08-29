const { ApolloError } = require('apollo-server');
const serverConfig = require('../source/server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    if (token == '')
        return { infoToken: null }

    else {
        try {
            let requestOptions = { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }), redirect: 'follow' };
            let response = await fetch(`${serverConfig.usersApiUrl}/token/verify/`, requestOptions)

            if (response.status != 200) throw new ApolloError(`SESION INACTIVA - ${401}`, 401)
            const infoToken = await response.json();
            return { infoToken };
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}

module.exports = authentication;