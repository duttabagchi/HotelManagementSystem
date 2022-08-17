using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;

namespace OnlineHotelManagementAPI.Service
{
    public class RateService : IRate
    {
        private IRate _IRate;

        public RateService(IRate iRate)
        {
            _IRate = iRate;
        }

        public List<Rate> GetAllRate()
        {
            return _IRate.GetAllRate();
        }

        public string InsertRate(Rate rate)
        {
            return _IRate.InsertRate(rate);
        }

        public string UpdateRate(Rate rate)
        {
            return _IRate.UpdateRate(rate);
        }

        public string GetRateById(int Id)
        {
            return _IRate.GetRateById(Id);
        }

        public string DeleteRate(int rate)
        {
            return _IRate.DeleteRate(rate);
        }
    }
}
