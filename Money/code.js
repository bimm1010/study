function convert(){
    var insert = parseFloat(document.getElementById('insert').value);
    var from =  document.getElementById('from');
    var to = document.getElementById('to');
    var result = document.getElementById('result');

    if(from.value === 'vn' && to.value === 'usd'){
        result.value = insert/23000;
    }else if(from.value === 'usd' && to.value === 'vn'){
        result.value = insert*23000;
    }
}
