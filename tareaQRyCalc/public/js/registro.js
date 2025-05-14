function generarqr(){
    let input1= document.getElementById('input1').value.trim();
    let input2= document.getElementById('input2').value.trim();
    let input3= document.getElementById('input3').value.trim();
    let input4= document.getElementById('input4').value.trim();
    let textoConcatenado= input1+ "," + input2+ ","+input3+ ","+input4
    console.log(textoConcatenado);

    if(textoConcatenado == ',,'){
        alert("Requiere llenar campos")
    }else{
        let qrCodeURL= 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+encodeURIComponent(textoConcatenado);
        
        let qrImg = document.createElement('img');
        //agregar atributos
        qrImg.src=qrCodeURL;
        qrImg.alt='un qr';
        
        qrImg.classList.add('codigoqr');

        document.getElementById('codigoqr').appendChild(qrImg);
    }
}