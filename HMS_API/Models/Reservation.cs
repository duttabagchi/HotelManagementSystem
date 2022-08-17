using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineHotelManagementAPI.Models
{
    public class Reservation
    {
        [Key]
        [DataType("int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [DataType("int")]
        public int no_of_children { get; set; }


        [DataType("int")]
        public int no_of_adults { get; set; }


        [DataType(DataType.Date)]
        public DateTime checkin_date { get; set; }


        [DataType(DataType.Date)]
        public DateTime checkout_date { get; set; }


        [DataType("int")]
        public int no_of_rooms { get; set; }


        [DataType("varchar(10)")]
        public string PhnNumber { get; set; }
    }
}
