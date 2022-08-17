using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public class StaffRepo : IStaff
    {
        private HotelContext _context;

        public StaffRepo(HotelContext context)
        {
            _context = context;
        }

        #region DeleteStaff
        /// <summary>
        /// This method is to delete staff details.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string DeleteStaff(int Id)
        {
            string stcode = string.Empty;
            try
            {
                var staff = _context.Staffs.Find(Id);
                if (staff != null)
                {
                    _context.Staffs.Remove(staff);
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

        #region GetAllStaff
        /// <summary>
        /// This method to read all staff values.
        /// </summary>
        /// <returns></returns>
        public List<Staff> GetAllStaff()
        {
            try
            {
                List<Staff> staff = _context.Staffs.ToList();
                return staff;
            }
            catch
            {
                throw;
            }
        }
        #endregion

        #region GetStaffById
        /// <summary>
        /// This method is to get staff values by specific id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string GetStaffById(int id)
        {
            string stcode = string.Empty;
            try
            {
                Staff staff = _context.Staffs.Find(id);
                if (staff != null)
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

        #region InsertStaff
        /// <summary>
        /// This method is to insert staff details.
        /// </summary>
        /// <param name="staff"></param>
        /// <returns></returns>
        public string InsertStaff(Staff staff)
        {
            string stcode = string.Empty;
            try
            {
                _context.Staffs.Add(staff);
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

        #region SaveStaff
        /// <summary>
        /// This method is to save staff details.
        /// </summary>
        /// <param name="staff"></param>
        public void SaveStaff(Staff staff)
        {
            _context.SaveChanges();
        }
        #endregion

        #region UpdateStaff
        /// <summary>
        /// This method is to update staff details.
        /// </summary>
        /// <param name="staff"></param>
        /// <returns></returns>
        public string UpdateStaff(Staff staff)
        {
            string stcode = string.Empty;
            try
            {
                _context.Staffs.Update(staff);
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
