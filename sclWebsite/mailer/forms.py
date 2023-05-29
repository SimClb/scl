from django import forms

class ContactForm(forms.Form):
    first_name = forms.CharField(label='Prénom',required=True)
    second_name = forms.CharField(label='Nom',required=True)
    from_email = forms.EmailField(label='Email',required=True)
    subject = forms.CharField(label='Sujet',required=True)
    message = forms.CharField(widget=forms.Textarea, label='Message',required=True)