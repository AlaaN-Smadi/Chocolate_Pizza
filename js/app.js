'use strict'

let arr = [];
for(let i=1;i<=12;i++){
    arr.push(`checkbox${i}`)
}

let arrLabels=[];
for(let i=1;i<=12;i++){
    arrLabels.push(`label${i}`)
}

let checksarr = [];
let labelsarr = [];

for(let i=0;i<12;i++){
    let checks = document.getElementById(`checkbox${i+1}`);
    let texts = document.getElementById(`label${i+1}`);

    checksarr.push(checks);
    labelsarr.push(texts);
}


for(let i=0;i<12;i++){
    let a = checksarr[i];
    let b = labelsarr[i];

    a.addEventListener('click',test);

    function test(){
        if(a.checked == true){
            b.style.textDecoration= 'line-through';
        }else{
            b.style.textDecoration= 'none';
        }
    }
}


    
