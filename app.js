document.getElementById('clipboard').addEventListener('click', copied);
document.getElementById('generatePassword').addEventListener('click', generatePassword);


function copied (){
    alert('Password copied to clipboard');
}

function generatePassword(){

    let length = document.getElementById('length').value;
     length = parseInt(length); 
    
    if(!isNaN(length)){
        alert('You entered a valid No')
    }

    else alert('Please enter the valid length of your password')
    
}


