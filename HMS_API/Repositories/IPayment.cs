using OnlineHotelManagementAPI.Models;

namespace OnlineHotelManagementAPI.Repositories
{
    public interface IPayment
    {
        List<Payment> GetAllPayment();
        string GetPaymentById(int Id);
        string InsertPayment(Payment payment);
        string UpdatePayment(Payment payment);
        string DeletePayment(int Id);
        void SavePayment(Payment payment);
        public Task<Payment> SendEmail(Payment payment);
    }
}
