using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;

namespace OnlineHotelManagementAPI.Service
{
    public class GuestService : IGuest
    {
        private IGuest _guest;

        public GuestService(IGuest guest)
        {
            _guest = guest;
        }

        public List<Guest> GetAll()
        {
            return _guest.GetAll();
        }

        public string GetById(int id)
        {
            return _guest.GetById(id);
        }

        public string AddGuest(Guest guest)
        {
            return _guest.AddGuest(guest);
        }

        public string UpdateGuest(Guest guest)
        {
            return _guest.UpdateGuest(guest);
        }

        public string RemoveGuest(int id)
        {
            return _guest.RemoveGuest(id);
        }
    }
}
