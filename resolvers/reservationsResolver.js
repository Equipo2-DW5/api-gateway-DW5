const reservationsResolver = {
  Query: {
    getReservas: (_, { userId }, { dataSources }) => {
      return dataSources.reservationAPI.getReservas();
    },
    reservationById: (_, { reservaByAnyId }, { dataSources, infoToken }) => {
      if (
        reservaByAnyId.userId.toString() == infoToken.id &&
        reservaByAnyId.userEmail == infoToken.email &&
        reservaByAnyId.userRole == infoToken.role &&
        infoToken.role != "Estudiante"
      ) {
        const reservationId = reservaByAnyId.id;
        return dataSources.reservationAPI.reservationById(reservationId);
      } else {
        return null;
      }
    },
    reservationByUserId: (
      _,
      { reservaByAnyId },
      { dataSources, infoToken }
    ) => {
      if (
        reservaByAnyId.userId == infoToken.id &&
        reservaByAnyId.userEmail == infoToken.email &&
        reservaByAnyId.userRole == infoToken.role
      ) {
        return dataSources.reservationAPI.reservationByUserId(
          reservaByAnyId.id
        );
      } else {
        return null;
      }
    },
  },
  Mutation: {
    createReservation: (
      _,
      { reservationCreateRequest },
      { dataSources, infoToken }
    ) => {
      if (
        reservationCreateRequest.userId == infoToken.id &&
        reservationCreateRequest.userEmail == infoToken.email &&
        reservationCreateRequest.userRole == infoToken.role
      ) {
        const reservation = reservationCreateRequest.reserva;
        return dataSources.reservationAPI.createReservation(reservation);
      } else {
        return null;
      }
    },
    updateReservation: (
      _,
      { reservationUpdateRequest },
      { dataSources, infoToken }
    ) => {
      if (
        reservationUpdateRequest.userId == infoToken.id &&
        reservationUpdateRequest.userEmail == infoToken.email &&
        reservationUpdateRequest.userRole == infoToken.role &&
        infoToken.role != "Estudiante"
      ) {
        const reservation = reservationUpdateRequest.reserva;
        return dataSources.reservationAPI.updateReservation(reservation);
      } else {
        return null;
      }
    },
  },
};

module.exports = reservationsResolver;
