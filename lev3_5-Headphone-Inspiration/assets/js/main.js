let name = document.getElementById('name');
let email = document.getElementById('email');
let textinfo = document.getElementById('costumerText');;
let checkbox = document.getElementById('sign');


function submitButton(){
    console.log('Costumer Name: ' + name.value);
    console.log('Costumer Email: ' + email.value);
    console.log('Costumer Text: ' + textinfo.value);

    if(document.getElementById('sign').checked){
        console.log('Subscription Newsletter wanted: True')
    } else{
        console.log('Subscription Newsletter wanted: False')
    }

}