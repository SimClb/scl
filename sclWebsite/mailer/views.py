from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from .forms import ContactForm
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
apiKey = os.environ['API_KEY']


def contact(request):
    form = ContactForm()

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            second_name = form.cleaned_data['second_name']
            subject = form.cleaned_data['subject']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']

            message = Mail(
                from_email='contact@scl-solution.com',
                to_emails='simon.clabots@gmail.com',
                subject=f'New message from {first_name} {second_name}',
                html_content=f'<strong>subject; {subject}</strong><br>mail from; {from_email} <br>message; {message}</strong')

            try:
                sg = SendGridAPIClient(apiKey)
                sg.send(message)
            except:
                return redirect('contact')

            return redirect('mail-sent')

    return render(
        request,
        'mailer/contact.html',
        {'form': form}
    )

def emailSent(request):
    return render(
        request, 
        'mailer/sent.html',
    )


