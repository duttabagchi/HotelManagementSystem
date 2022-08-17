using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public interface IRoom
    {
        public List<Room> GetAll();
        public string GetById(int id);
        public string AddRoom(Room room);
        public string UpdateRoom(Room room);
        public string RemoveRoom(int id);
    }
}
