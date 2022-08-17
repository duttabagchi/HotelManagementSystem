using Microsoft.EntityFrameworkCore;

namespace OnlineHotelManagementAPI.Models
{
    public class HotelContext : DbContext
    {
        public HotelContext(DbContextOptions options) : base(options) {}

        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<Inventory> Inventoriess { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Rate> Rates { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Admin> Admins { get; set; }
    }
}
