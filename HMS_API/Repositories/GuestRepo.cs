using Microsoft.EntityFrameworkCore;
using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public class GuestRepo : IGuest
    {
        readonly HotelContext _dbContext;
        public GuestRepo(HotelContext context)
        {
            _dbContext = context;
        }

        #region GetAllGuests
        /// <summary>
        /// This method to read all guest values.
        /// </summary>
        /// <returns></returns>
        public List<Guest> GetAll()
        {
            try
            {
                return _dbContext.Guests.ToList();
            }
            catch
            {
                throw;
            }
        }
        #endregion

        #region GetGuestById
        /// <summary>
        /// This method is to get guest values by specific id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string GetById(int id)
        {
            string stcode = string.Empty;
            try
            {
                Guest? guest = _dbContext.Guests.Find(id);
                if (guest != null)
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

        #region AddGuest
        /// <summary>
        /// This method is to insert guest details.
        /// </summary>
        /// <param name="guest"></param>
        /// <returns></returns>
        public string AddGuest(Guest guest)
        {
            string stcode = string.Empty;
            try
            {
                _dbContext.Guests.Add(guest);
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

        #region UpdateGuest
        /// <summary>
        /// This method is to update guest details.
        /// </summary>
        /// <param name="guest"></param>
        /// <returns></returns>
        public string UpdateGuest(Guest guest)
        {
            string stcode = string.Empty;
            try
            {
                _dbContext.Entry(guest).State = EntityState.Modified;
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

        #region DeleteGuest
        /// <summary>
        /// This method is to delete guest details.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string RemoveGuest(int id)
        {
            string stcode = string.Empty;
            try
            {
                var guest = _dbContext.Guests.Find(id);
                if (guest != null)
                {
                    _dbContext.Guests.Remove(guest);
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
