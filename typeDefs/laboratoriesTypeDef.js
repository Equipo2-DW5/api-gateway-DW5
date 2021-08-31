const { gql } = require("apollo-server");

const laboratoriesTypeDefs = gql`
  
type Laboratorio {
  lab_id:Int
  categoria: String
  descripcion: String
  estado: String
  aforo: Int
}

input LaboratorioInput {
  categoria: String
  descripcion: String
  estado: String
  aforo: Int
}

type Query {
  RetrieveLabById(lab_id: Int!): Laboratorio
}

type Query {
  RetrieveLabList: [Laboratorio]
}

type Mutation {
  LabCreate(lab_input: LaboratorioInput!): Laboratorio
}
`;

module.exports = laboratoriesTypeDefs;