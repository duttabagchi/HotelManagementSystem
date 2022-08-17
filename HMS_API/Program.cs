using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using OnlineHotelManagementAPI.Models;
using OnlineHotelManagementAPI.Repositories;
using OnlineHotelManagementAPI.Service;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<HotelContext>
    (x => x.UseSqlServer(builder.Configuration.GetConnectionString("HotelConnection")));

builder.Services.AddTransient<IInventory, InventoryRepo>();
builder.Services.AddTransient<InventoryService, InventoryService>();

builder.Services.AddTransient<IStaff, StaffRepo>();
builder.Services.AddTransient<StaffService, StaffService>();

builder.Services.AddTransient<IRate, RateRepo>();
builder.Services.AddTransient<RateService, RateService>();

builder.Services.AddTransient<IRoom, RoomRepo>();
builder.Services.AddTransient<RoomService, RoomService>();

builder.Services.AddTransient<IGuest, GuestRepo>();
builder.Services.AddTransient<GuestService, GuestService>();

builder.Services.AddTransient<IReservation, ReservationRepo>();
builder.Services.AddTransient<ReservationService, ReservationService>();

builder.Services.AddTransient<IPayment, PaymentRepo>();
builder.Services.AddTransient<PaymentService, PaymentService>();

builder.Services.AddTransient<IAdmin, AdminRepo>();
builder.Services.AddTransient<AdminService, AdminService>();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options => {
        options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
        {
            Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
            In = ParameterLocation.Header,
            Name = "Authorization",
            Type = SecuritySchemeType.ApiKey
        });

        options.OperationFilter<SecurityRequirementsOperationFilter>();
    });

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//CORS
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
