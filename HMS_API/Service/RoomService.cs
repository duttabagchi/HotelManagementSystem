using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;

namespace OnlineHotelManagementAPI.Service
{
    public class RoomService : IRoom
    {
        private IRoom _room;

        public RoomService(IRoom room)
        {
            _room = room;
        }

        public List<Room> GetAll()
        {
            return _room.GetAll();
        }

        public string GetById(int id)
        {
            return _room.GetById(id);
        }

        public string AddRoom(Room room)
        {
            return _room.AddRoom(room);
        }

        public string UpdateRoom(Room room)
        {
            return _room.UpdateRoom(room);
        }

        public string RemoveRoom(int id)
        {
            return _room.RemoveRoom(id);
        }
    }
}
