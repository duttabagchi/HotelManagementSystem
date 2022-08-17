using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public interface IStaff
    {
        List<Staff> GetAllStaff();
        string GetStaffById(int Id);
        string InsertStaff(Staff staff);
        string UpdateStaff(Staff staff);
        string DeleteStaff(int Id);
        void SaveStaff(Staff staff);
    }
}
