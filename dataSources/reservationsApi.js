const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../source/server');

class ReservationAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.reservations_api_url;
  }
  async getReservas(){
    return await this.get(`/reservas`);
  }
  async reservationById(reservationId){
    return await this.get(`/reservas/${reservationId}`);
  }

  async reservationByUserId(userId){
    return await this.get(`/reservas/user/${userId}`);
  }

  async createReservation(reservation){
    return await this.post('/reservas', {...reservation});
  }

  async updateReservation(reservation){
    return await this.put('/reservas', {...reservation});
  }


}

module.exports = ReservationAPI;