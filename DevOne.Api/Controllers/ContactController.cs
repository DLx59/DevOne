using DevOne.Api.Services;
using DevOne.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace DevOne.Api.Controllers;

public class ContactController : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly IConfiguration _configuration;

    public ContactController(IConfiguration configuration, IEmailService emailService)
    {
        _emailService = emailService;
        _configuration = configuration;
    }

    [HttpPost]
    [Route("send")]
    public async Task<IActionResult> SendEmail(EmailModel emailModel)
    {
        if (!ModelState.IsValid)
            return BadRequest();

        try
        {
            if (await _emailService.SendEmailAsync(emailModel))
                return Ok();
        }
        catch (Exception ex)
        {
            var e = ex;
        }

        return BadRequest();
    }
}