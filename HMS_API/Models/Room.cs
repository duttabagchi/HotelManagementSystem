using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineHotelManagementAPI.Models
{
    public class Room
    {
        [Key]
        [DataType("int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int room_id { get; set; }


        public string room_type { get; set; }


        [DataType(DataType.Date)]
        public DateTime check_in { get; set; }


        [DataType(DataType.Date)]
        public DateTime check_out { get; set; }


        [Display(Name = "Status of the room")]
        public string status { get; set; }
    }
}
