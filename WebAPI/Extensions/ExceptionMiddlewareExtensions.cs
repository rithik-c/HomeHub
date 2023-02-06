namespace WebAPI.Extensions;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using WebAPI.Middlewares;

public static class ExceptionMiddlwareExtensions
{
    public static void ConfigureExceptionHandler(this IApplicationBuilder app, IWebHostEnvironment env) {
        app.UseMiddleware<ExceptionMiddleware>();
    }

    public static void ConfigureBuiltinExceptionHandler(this IApplicationBuilder app, IWebHostEnvironment env) {

        if (env.IsDevelopment()) {

            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI();

        } else {
            
            app.UseExceptionHandler(
                options =>
                {
                    options.Run(
                        async context =>
                        {
                            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                            var ex = context.Features.Get<IExceptionHandlerFeature>();
                            if (ex != null)
                            {
                                await context.Response.WriteAsync(ex.Error.Message);
                            }
                        }
                    );
                }
            );
        }
    }
}