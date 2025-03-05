 
const btn= document.getElementById('Addbtn');

function add(){
    if(document.getElementById('num1').value==''||document.getElementById('num2').value==''){
        alert('Please Enter the Value');
        return;
    }
    const num1=parseFloat(document.getElementById('num1').value);
    const num2= parseFloat(document.getElementById('num2').value); 
    const  result= document.getElementsByClassName('result')[0];
    let sum= num1+num2;
    result.innerHTML=`${sum}`;
}
const btn1 = document.getElementById('clear');
btn1.addEventListener('click', function(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementsByClassName('result')[0].innerHTML = '';
});

btn.addEventListener('click' ,add);



onclick="add()"