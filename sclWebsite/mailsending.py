import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

message = Mail(
    from_email='contact@scl-solution.com',
    to_emails='web.clabots@gmail.com',
    subject='SCL - Merci pour votre email !',
    html_content='<strong>This is a test from python !!</strong>')
try:
    sg = SendGridAPIClient('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')
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(e.message)