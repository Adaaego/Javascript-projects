const PasswordBox = document.querySelector('.password-box')



function generatePassword(){
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers ='1234567890';
    let specialCharacters = '!@#$%^&*()-_=+<>?:"{}|[]\';/.,'

    const allChar = [...lowercase, ...numbers, ...uppercase, ...specialCharacters]
    let password = '';

    for(let i = 0; i < 11; i++){
      let random = Math.floor( Math.random() * allChar.length)
      password += allChar[random]
    }

    PasswordBox.value = password;
}

function copyPassword(){
  PasswordBox.select();
  document.execCommand('copy');
}