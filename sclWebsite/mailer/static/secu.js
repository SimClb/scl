
let first_name_id = document.getElementById('id_first_name');

let second_name_id = document.getElementById('id_second_name');

let email_id = document.getElementById('id_from_email');

let subject_id = document.getElementById('id_subject');

let message_id = document.getElementById('id_message');


let counter = 0;

let id_button = document.getElementById('button');
let button = document.querySelector('#button');
let specialChars = ['^', '[',']','!','@','#','$','%','&','*','(',')','_','+','/','=','{','}',',',':',';','<','>','?','§','°','€','£','`' ];

//################################
//          FUNCTIONS           //
//################################


// NAME AND SECOND NAME VALIDATION 

function nameValidation(toValidate) {
    let x = true;
    if (toValidate.length < 2) {
        console.log('en dessous de 2');
        x = false;
        return x; 
    }
    else {
        x = true;

        console.log(`size is ok; x is ${x}`);
    }
    for (let i = 0; i < toValidate.length; i++) {
        console.log(`ici vous pouvez retrouver i; ${i}`);

        if (!isNaN(toValidate[i]) || toValidate[i] != ' ') {
            let g = toValidate[i];
            console.log(type(toValidate[i]));
            console.log(`${g} is a number`);
            x = false;
            return x; 
            
        }
        else {
            x = true;
            console.log(`is not a number; x is ${x}`);
        }
        for (let j = 0; j < specialChars.length; j++) {
            if (toValidate[i] == specialChars[j]) {
                console.log(`special char : ${i} == ${j}`);
                x = false;
                return x; 
            }
            else {
                x = true;
                console.log(`is not a special char; x is ${x}`);
            }
        }
    }
    return x;
}



function btnValidator() {
    if (counter > 4) {
        id_button.classList.add('available');
        //button.addEventListener('click', function (event) {
        //    console.log('tu peux normalement cliquer !');
        //    event.preventDefault();
        //}, true);
    }
    else if (counter < 4) {
        id_button.classList.remove('available');
        let info = 't dans le esle';
        console.log(info);
        id_button.addEventListener('click', function(event) {
            console.log('tu pourras pas clicker');
            event.preventDefault();
        });
    }
}


//################################
//        EVENT LISTENER        //
//################################

// FIRST NAME

first_name_id.addEventListener('change', (event) => {
    //console.log('c lance');
    let firstName = document.forms["form"]["first_name"].value;

    if (nameValidation(firstName)) {
        //console.log('ok');
        counter += 1;
        btnValidator();
        first_name_id.style.borderColor = ' #65e12b';
    }
    else {
        //console.log('pas ok');
        counter -= 1;
        console.log(firstName);
        first_name_id.style.borderColor = '#e60e0e';
    }
});

// SECOND NAME 

second_name_id.addEventListener('change', (event) => {
    //console.log('c lance');
    let secondName = document.forms["form"]["second_name"].value;

    if (nameValidation(secondName)) {
        //console.log('ok');
        second_name_id.style.borderColor = ' #65e12b';
        counter += 1;
        btnValidator();
    }
    else {
        //console.log('pas ok');
        second_name_id.style.borderColor = '#e60e0e';
        counter -= 1;
    }
});

// ID FROM EMAIL

email_id.addEventListener('change', (event) => {
    let email = document.forms["form"]["from_email"].value;

    if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0 && email.length > 6) {
        email_id.style.borderColor = ' #65e12b';
        counter += 1;
        btnValidator();
    }
    else {
        email_id.style.borderColor = '#e60e0e';
        counter -= 1;
    }
});

// SUBJECT

subject_id.addEventListener('change', (event) => {
    let subject = document.forms['form']["subject"].value;

    if (subject.length > 2) {
        subject_id.style.borderColor = '#65e12b';
        counter += 1;
        btnValidator();
    }
    else {
        subject_id.style.borderColor = '#e60e0e';
        counter -= 1;
    }
});

// MESSAGE

message_id.addEventListener('change', (event) => {
    let message = document.forms['form']["message"].value;
    if (message.length > 5) {
        message_id.style.borderColor = '#65e12b';
        counter += 1;
        btnValidator();
    }
    else {
        message_id.style.borderColor = '#e60e0e';   
        counter -= 1;
    }
});

