using System.ComponentModel.DataAnnotations;

namespace OnlineHotelManagementAPI.Models
{
    public class Inventory
    {
        [Key]
        [DataType("int")]
        public int Id { get; set; }


        [DataType("Varchar(30)")]
        public string InventoryName { get; set; }


        public int Quantity { get; set; }


        public double Price { get; set; }
    }
}
