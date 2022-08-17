using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public class ReservationRepo : IReservation
    {
        private HotelContext _context;

        public ReservationRepo(HotelContext context)
        {
            _context = context;
        }

        #region DeleteReservation
        /// <summary>
        /// This method is to delete reservation details.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string DeleteReservation(int id)
        {
            string stcode = string.Empty;
            try
            {
                var reservation = _context.Reservations.Find(id);
                if (reservation != null)
                {
                    _context.Reservations.Remove(reservation);
                    _context.SaveChanges();
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

        #region GetAllReservation
        /// <summary>
        /// This method to read all reservation values.
        /// </summary>
        /// <returns></returns>
        public List<Reservation> GetAllReservation()
        {
            try
            {
                List<Reservation> reservation = _context.Reservations.ToList();
                return reservation;
            }
            catch
            {
                throw;
            }
        }
        #endregion

        #region GetReservationById
        /// <summary>
        /// This method is to get reservation values by specific id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string GetReservationById(int Id)
        {
            Reservation reservation;
            string stcode = string.Empty;
            try
            {
                reservation = _context.Reservations.Find(Id);
                if (reservation != null)
                {
                    _context.SaveChanges();
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

        #region InsertReservation 
        /// <summary>
        /// This method is to insert reservation details.
        /// </summary>
        /// <param name="reservation"></param>
        /// <returns></returns>
        public string InsertReservation(Reservation reservation)
        {
            string stcode = string.Empty;
            try
            {
                _context.Reservations.Add(reservation);
                _context.SaveChanges();
                stcode = "200";

            }
            catch (Exception e)
            {
                stcode = "400";
            }
            return stcode;
        }
        #endregion

        #region UpdateReservation
        /// <summary>
        /// This method is to update reservation details.
        /// </summary>
        /// <param name="reservation"></param>
        /// <returns></returns>
        public string UpdateReservation(Reservation reservation)
        {
            string stcode = string.Empty;
            try
            {
                _context.Reservations.Update(reservation);
                _context.SaveChanges();
                stcode = "200";

            }
            catch (Exception e)
            {
                stcode = "400";
            }
            return stcode;
        }
        #endregion
    }
}
