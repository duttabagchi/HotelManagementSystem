using Microsoft.EntityFrameworkCore;
using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public class RoomRepo : IRoom
    {
        readonly HotelContext _dbContext;
        public RoomRepo(HotelContext context)
        {
            _dbContext = context;
        }

        #region GetAllRooms
        /// <summary>
        /// This method to read all room values.
        /// </summary>
        /// <returns></returns>
        public List<Room> GetAll()
        {
            try
            {
                return _dbContext.Rooms.ToList();
            }
            catch
            {
                throw;
            }
        }
        #endregion

        #region GetRoomById
        /// <summary>
        /// This method is to get room values by specific id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string GetById(int id)
        {
            string stcode = string.Empty;
            try
            {
                Room? room = _dbContext.Rooms.Find(id);

                if (room != null)
                {

                    _dbContext.SaveChanges();
                    stcode = "200";
                }
                else
                {
                    stcode = "400";
                }
            }
            catch (Exception e)
            {
                stcode = e.Message;
            }
            return stcode;
        }
        #endregion

        #region AddRoom
        /// <summary>
        /// This method is to insert room details.
        /// </summary>
        /// <param name="rooom"></param>
        /// <returns></returns>
        public string AddRoom(Room room)
        {
            string stcode = string.Empty;
            try
            {
                _dbContext.Rooms.Add(room);
                _dbContext.SaveChanges();
                stcode = "200";
            }
            catch
            {
                stcode = "400";
            }
            return stcode;
        }
        #endregion

        #region UpdateRoom
        /// <summary>
        /// This method is to update room details.
        /// </summary>
        /// <param name="room"></param>
        /// <returns></returns>
        public string UpdateRoom(Room room)
        {
            string stcode = string.Empty;
            try
            {
                _dbContext.Entry(room).State = EntityState.Modified;
                _dbContext.SaveChanges();
                stcode = "200";

            }
            catch
            {
                stcode = "400";
            }
            return stcode;

        }
        #endregion

        #region DeleteRoom
        /// <summary>
        /// This method is to delete room details.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string RemoveRoom(int id)
        {
            string stcode = string.Empty;
            try
            {

                var room = _dbContext.Rooms.Find(id);
                if (room != null)
                {
                    _dbContext.Rooms.Remove(room);
                    _dbContext.SaveChanges();
                    stcode = "200";

                }
                else
                {
                    stcode = "400";
                }
            }
            catch
            {
                stcode = "400";
            }
            return stcode;
        }
        #endregion
    }
}
