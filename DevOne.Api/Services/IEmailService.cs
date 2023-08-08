using DevOne.Common.Models;

namespace DevOne.Api.Services;

public interface IEmailService
{
    Task<bool> SendEmailAsync(EmailModel model);
}