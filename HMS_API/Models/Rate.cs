using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineHotelManagementAPI.Models
{
    public class Rate
    {
        [Key]
        [DataType("int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int rate_id { get; set; }


        public int No_of_Days { get; set; }


        public double ExtensionPrice { get; set; }


        public double PerNightPrice { get; set; }


        public double TotalAmount { get; set; }


        public int? room_id { get; set; }
        [ForeignKey("room_id")]
        public Room? Room { get; set; }
    }
}
