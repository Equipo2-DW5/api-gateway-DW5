const reservationsResolver = {
  Query: {
    getReservas: (_, { userId }, { dataSources}) => {

        return dataSources.reservationAPI.getReservas();
    },
  },
  Mutation: {
    createReservation: (_, { reservation }, { dataSources, infoToken }) => {
      if (reservation.idUsuario == infoToken.id)
        return dataSources.reservationAPI.createReservation(reservation);
      else return null;
    },
    updateReservation: (_, { reservation }, { dataSources, infoToken }) => {
      if (reservation.idUsuario == infoToken.id)
        return dataSources.reservationAPI.updateReservation(reservation);
      else return null;
    },
  },
};

module.exports = reservationsResolver;
