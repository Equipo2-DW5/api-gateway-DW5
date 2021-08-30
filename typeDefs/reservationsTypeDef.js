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
    duracion: String
    idUsuario: String
    idLaboratorio: String
    estado: Boolean
  }
  input ReservaCreateInput {
    userId: String
    userRole: String
    userEmail: String
    reserva: ReservaInput
  }

  input ReservaInput {
    idReserva: String
    descripcion: String
    fechaSolicitud: String
    fechaFin: String
    duracion: String
    idUsuario: String
    idLaboratorio: String
    estado: Boolean
  }
  input ReservaUpdateInput {
    userId: String
    userRole: String
    userEmail: String
    reserva: ReservaInput
  }

  input ReservaByAnyId {
    userId: String
    userRole: String
    userEmail: String
    id: String
  }

  type Query {
    getReservas: ReservaResponse
    reservationById(reservaByAnyId: ReservaByAnyId!): ReservaResponse
    reservationByUserId(reservaByAnyId: ReservaByAnyId!): ReservaResponse
  }

  type Mutation {
    createReservation(reservationCreateRequest: ReservaCreateInput!): ReservaResponse
    updateReservation(reservationUpdateRequest: ReservaUpdateInput!): ReservaResponse
  }
`;

module.exports = reservationsTypeDefs;
