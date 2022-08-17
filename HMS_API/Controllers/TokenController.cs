using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Service;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace OnlineHotelManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public static Admin admin = new Admin();
        private readonly IConfiguration _configuration;
        private AdminService _adminService;
        private HotelContext _hotelContext;

        public TokenController(IConfiguration configuration, AdminService adminservice,
            HotelContext hotelContext)
        {
            _configuration = configuration;
            _adminService = adminservice;
            _hotelContext = hotelContext;
        }

        #region RegisterAdmin
        [HttpPost("Register")]
        public async Task<ActionResult<Admin>> Register(Login request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            admin.Username = request.Username;
            admin.PasswordHash = passwordHash;
            admin.PasswordSalt = passwordSalt;
            admin.Role = request.Role;

            return Ok(_adminService.AddAdmin(admin));
        }
        #endregion

        #region LoginAdmin
        [HttpPost("Login")]
        public async Task<ActionResult<string>> Login(Login request)
        {
            Admin? admin1 = _hotelContext.Admins.Find(request.Username);
            if (admin1 == null)
            {
                return NotFound(new { message = "User not found." });
            }
            else
            {
                if (!VerifyPasswordHash(request.Password, admin1.PasswordHash, admin1.PasswordSalt))
                {
                    return BadRequest(new { message = "Wrong password." });
                }

                //admin1 = _hotelContext.Admins.Find(request.Role);
                if (admin1.Role != request.Role)
                {
                    return BadRequest(new { message = "Role forbidden." });
                }

                string token = CreateToken(admin1);

                //return Ok(new { token, admin1 });
                return Ok(token);
            }
            //var refreshToken = GenerateRefreshToken();
            //SetRefreshToken(refreshToken);
        }
        #endregion  

        #region CreateToken
        private string CreateToken(Admin admin)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, admin.Username),
                new Claim(ClaimTypes.Role, admin.Role)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
        #endregion

        #region CreatePasswordHash
        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
        #endregion

        #region VerifyPasswordHash
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }
        #endregion
    }
}
