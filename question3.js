function data()
{
    let psw = document.querySelector('#psw').value
    let psw2 = document.querySelector('#psw2').value

    console.log(psw,psw2);

    if(psw === "")
    {
        document.querySelector('#errorpsw').innerHTML = "Please Enter password";
        let selectedinput = document.querySelector('#psw');
        selectedinput.style.borderColor = "red";
        selectedinput.style.outlineColor = "red";

        return false;
    }

    else if(!(psw.match(/[qwertyuiopasdfghjklzxcvbnm]/) && 
    psw.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) && psw.match(/[1234567890]/)
     && psw.match(/[!@#$%^&*()]/)))
     {
        document.querySelector('#errorpsw').innerHTML = "Password shoult contain uppercase, lowercase, number and special character";
        let selectedinput = document.querySelector('#psw');
        selectedinput.style.borderColor = "red";
        selectedinput.style.outlineColor = "red";

        return false;
     }

    else if(psw2 === "")
    {
        document.querySelector('#errorpsw2').innerHTML = "Please Confirm password";
        let selectedinput2 = document.querySelector('#psw2');
        selectedinput2.style.borderColor = "red";
        selectedinput2.style.outlineColor = "red";

        return false;
    }

}