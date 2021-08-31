const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../source/server');

class LaboratoriesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.laboratories_api_url;
      }

      async RetrieveLabById(lab_id){
        
        return await this.get(`/lab/${lab_id}`);
      }

      async RetrieveLabList(){
        
        return await this.get(`/lablist/`);
      }

      async LabCreate(lab_input){
        
        return await this.post(`/createlab/`,{...lab_input});
      }



      
}
module.exports = LaboratoriesAPI;