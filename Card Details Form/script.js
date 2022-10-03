var cardnumber = document.getElementById('cardnumber');
var submitt = document.getElementById('button');
var success = document.getElementById('successpage');
var card = document.getElementById('cardform');
var number = document.querySelector('.number');
document.getElementById('holdername').oninput = () =>{
    document.querySelector('.name').innerHTML = document.getElementById('holdername').value;
}
document.getElementById('cardnumber').oninput =() =>{
    document.querySelector('.number').innerHTML = document.getElementById('cardnumber').value;
}
document.getElementById('expmonth').oninput = () =>{
    document.querySelector('.cc').innerHTML =document.getElementById('expmonth').value + "/" 
}
document.getElementById('expyear').oninput = () =>{
    document.querySelector('.cs').innerHTML = document.getElementById('expyear').value;
}
document.getElementById('cvc').oninput = () =>{
    document.querySelector('.cvv').innerHTML = document.getElementById('cvc').value;
}


var form = document.querySelector('form')
 submitt.addEventListener('click', (e)=> {
    if(form.checkValidity() == true){
        result.style.display = 'block'
        card.style.display ='none'
        e.preventDefault();
    } 
})  
var cont = document.getElementById('continuebtn')
cont.onclick = function(){
    window.location.reload()
}