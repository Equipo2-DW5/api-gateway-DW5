const reservationsResolver = {
  Query: {
    getReservas: (_, { userId }, { dataSources, userIdToken }) => {

        return dataSources.reservationAPI.getReservas();
    },
  },
  Mutation: {
    createReservation: (_, { reservation }, { dataSources, userIdToken }) => {
      if (reservation.idUsuario == userIdToken)
        return dataSources.reservationAPI.createReservation(reservation);
      else return null;
    },
    updateReservation: (_, { reservation }, { dataSources, userIdToken }) => {
      if (reservation.idUsuario == userIdToken)
        return dataSources.reservationAPI.updateReservation(reservation);
      else return null;
    },
  },
};

module.exports = reservationsResolver;
