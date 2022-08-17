using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;

namespace OnlineHotelManagementAPI.Service
{
    public class StaffService : IStaff
    {
        private IStaff _IStaff;

        public StaffService(IStaff iStaff)
        {
            _IStaff = iStaff;
        }

        public string DeleteStaff(int Id)
        {
            return _IStaff.DeleteStaff(Id);
        }

        public List<Staff> GetAllStaff()
        {
            return _IStaff.GetAllStaff();
        }

        public string GetStaffById(int Id)
        {
            return _IStaff.GetStaffById(Id);
        }

        public string InsertStaff(Staff staff)
        {
            return _IStaff.InsertStaff(staff);
        }

        public void SaveStaff(Staff staff)
        {
            _IStaff.SaveStaff(staff);
        }

        public string UpdateStaff(Staff staff)
        {
            return _IStaff.UpdateStaff(staff);
        }
    }
}
