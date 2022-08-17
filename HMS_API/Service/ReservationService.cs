using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;

namespace OnlineHotelManagementAPI.Service
{
    public class ReservationService : IReservation
    {
        private IReservation _IReservation;

        public ReservationService(IReservation iReservation)
        {
            _IReservation = iReservation;
        }

        public string DeleteReservation(int reservation)
        {
            return _IReservation.DeleteReservation(reservation);
        }

        public List<Reservation> GetAllReservation()
        {
            return _IReservation.GetAllReservation();
        }

        public string GetReservationById(int Id)
        {
            return _IReservation.GetReservationById(Id);
        }

        public string InsertReservation(Reservation reservation)
        {
            return _IReservation.InsertReservation(reservation);
        }

        public string UpdateReservation(Reservation reservation)
        {
            return _IReservation.UpdateReservation(reservation);
        }
    }
}
