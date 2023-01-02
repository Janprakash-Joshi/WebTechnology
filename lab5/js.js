function validateEmail(email) {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return re.test(email);
  }

const dname = document.getElementById('displayname');
const demail = document.getElementById('displayemail');
const dabout = document.getElementById('displayabt');
const dsem = document.getElementById('displaysem');
const dgender = document.getElementById('gender');
const dint=document.getElementById('displayint');
const btn = document.getElementById('submit');

btn.onclick = () => {

    const Iname = document.getElementById('inputname').value;
    const email = document.getElementById('inputemail').value;
    const about = document.getElementById('inputabt').value;
    const sem = document.getElementById('inputsem').value;
    var intArray = document.getElementsByName('i');
    var interest={ };
    var genderArray = document.getElementsByName('g');
    var gender = '';

    
      
     
      const isValid = validateEmail(email);
      
      if (isValid) {
       
      
     
    for (let index = 0; index < genderArray.length; index++) {
        if (genderArray[index].checked == true) {
            gender = genderArray[index].value;
            break;
        }

    }

    for (let index1 = 0; index1 < intArray.length; index1++) {
        if (intArray[index1].checked == true) {
            interest[index1] = intArray[index1].value;
            
        }

    }

   const fav=JSON.stringify(interest);
   const modifav=fav.replace(/[{ } "]+/g, '');       //slice(2,-2);
    dname.innerText = Iname;
    demail.innerText = email;
    dabout.innerText = about;
    dsem.innerText = sem;
    dgender.innerText = gender;
  dint.innerText=modifav;


}

else{
    window.alert('Invalid Email Address !!')
}

}