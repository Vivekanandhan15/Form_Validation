var NameError = document.getElementById('NameError');
var PhoneError = document.getElementById('Phone');
var EmailError = document.getElementById('EmailError');
var MessageError = document.getElementById('MessageError');
var Submiterroe = document.getElementById('Submiterroe');

function ValidateName(){

var Name = document.getElementById('Contact-Name').value;

if (Name.length == 0){
    NameError.innerHTML = 'Name is Required';
    return false;

}
if(!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    NameError.innerHTML = 'Write full Name';
    return false;
}
NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}

function ValidatePhone(){
var Phone = document.getElementById('PhoneNo').value;
if (Phone.length == 0){
    PhoneError.innerHTML = 'Phone Number Should Be In 10 Digits';
    return false;
}
if(!Phone.match(/^[0-9]{10}$/)){
PhoneError.innerHTML = 'Phone No is Required'
return false;
}
PhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true
}

function ValidateEmail(){
    var Email = document.getElementById('EmailId').value;
    if (Email.length == 0){
        EmailError.innerHTML = 'Email Id is Must';
        return false;
    }

    EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    }

    function ValidateMessage(){
        var Message = document.getElementById('Message').value;
        var Required = 20;
        var left = Required - Message.length;

        if(left > 0){
            MessageError.innerHTML = left + '  More Characters Are Required';
            return false;   
        }
        MessageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    }

    function ValidateForm(){
        if(!!ValidateName  || !ValidatePhone || !ValidateEmail || !ValidateMessage)
            Submiterroe.style.display = 'block';
            Submiterroe.innerHTML = 'Please Check And Enter Details Properly to Submit ';
            setTimeout(function () {Submiterroe.style.display= 'none';} , 5000)
        return false;
    }
  