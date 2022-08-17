using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;

namespace OnlineHotelManagementAPI.Service
{
    public class AdminService : IAdmin
    {
        private IAdmin _admin;

        public AdminService(IAdmin admin)
        {
            _admin = admin;
        }

        public string AddAdmin(Admin admin)
        {
            return _admin.AddAdmin(admin);
        }
    }
}
