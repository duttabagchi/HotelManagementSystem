using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public interface IGuest
    {
        public List<Guest> GetAll();
        public string GetById(int id);
        public string AddGuest(Guest guest);
        public string UpdateGuest(Guest guest);
        public string RemoveGuest(int id);
    }
}
