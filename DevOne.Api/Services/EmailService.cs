using DevOne.Common.Models;
using Mailjet.Client;
using Mailjet.Client.Resources;
using Mailjet.Client.TransactionalEmails;
using Newtonsoft.Json.Linq;

namespace DevOne.Api.Services;

public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;
    private MailjetClient MailjetClient { get; set; }

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
        MailjetClient = new MailjetClient(_configuration["Mailjet:ApiKey"], _configuration["Mailjet:ApiSecret"]);
    }

    public async Task<bool> SendEmailAsync(EmailModel model)
    {
        var request = new MailjetRequest()
            {
                Resource = Send.Resource
            }
            .Property(Send.FromEmail, _configuration["ContactEmail"])
            .Property(Send.FromName, "Formulaire de contact - DevOne")
            .Property(Send.Subject, "Demande d'information")
            .Property(Send.HtmlPart, $"<h1>Formulaire de contact</h1> <br>Nom & Prénom : {model.Name} <br>Adresse email : {model.Email} <br>Numéro de téléphone : {model.PhoneNumber} <br>Site Web : {model.Website} <br><br>Demande : {model.Content}")
            .Property(Send.To, _configuration["ContactEmail"])
            .Property(Send.Headers, new JObject
            {
                { "Reply-to", model.Email }
            });

        var response = await MailjetClient.PostAsync(request);

        if (response.IsSuccessStatusCode)
            return true;

        Console.WriteLine("+++ ERROR +++" + response.GetErrorInfo(), response.GetErrorMessage());
        return false;
    }
}