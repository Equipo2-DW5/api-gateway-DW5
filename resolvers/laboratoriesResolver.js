const laboratoriesResolver = {
    Query: {
        RetrieveLabById: (_, { lab_id }, { dataSources}) => {
  
          return dataSources.laboratoriesAPI.RetrieveLabById( lab_id);
      },
      RetrieveLabList: (_, __, { dataSources}) => {
  
        return dataSources.laboratoriesAPI.RetrieveLabList();
    },
    
},
    Mutation: {
        LabCreate: (_, { lab_input }, { dataSources, infoToken }) => {
            return dataSources.laboratoriesAPI.LabCreate(lab_input);
    
      },
      
    },
  };
  
  module.exports = laboratoriesResolver;
  