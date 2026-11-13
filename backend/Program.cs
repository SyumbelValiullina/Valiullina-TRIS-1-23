using backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IRequestService, RequestService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "backend v1");
    });
}

app.MapControllers();

app.MapGet("/health", () => Results.Ok("ok"));

app.MapGet("/info", (IWebHostEnvironment env, IRequestService requests) => Results.Ok(new
{
    name = "backend",
    environment = env.EnvironmentName,
    version = "lab-07",
    service = requests.Describe()
}));

app.Run();
