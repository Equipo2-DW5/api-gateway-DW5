const { gql } = require("apollo-server");

const reservationsTypeDefs = gql`
  type ReservaResponse {
    timestamp: String
    id: String
    message: String
    data: [Reserva]
  }

  type Reserva {
    idReserva: String!
    descripcion: String
    fechaSolicitud: String
    fechaFin: String
    duracion: Int
    idUsuario: String
    idLaboratorio: String
    estado: String
  }

  input ReservaInput {
    idReserva: String!
    descripcion: String
    fechaSolicitud: String
    fechaFin: String
    duracion: Int
    idUsuario: String
    idLaboratorio: String
    estado: String
  }

  type Query {
    getReservas: ReservaResponse
    reservationById(reservationId: String!): ReservaResponse
    transacctionByIdUser(userId: String!): ReservaResponse
  }

  type Mutation {
    createReservation(transaction: ReservaInput!): ReservaResponse
    updateReservation(transaction: ReservaInput!): ReservaResponse
  }
`;

module.exports = reservationsTypeDefs;
