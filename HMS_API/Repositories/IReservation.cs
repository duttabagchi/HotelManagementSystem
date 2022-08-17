using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public interface IReservation
    {
        List<Reservation> GetAllReservation();
        string GetReservationById(int Id);
        string InsertReservation(Reservation reservation);
        string UpdateReservation(Reservation reservation);
        string DeleteReservation(int reservation);
    }
}
