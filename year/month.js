var year = parseInt(prompt("nhập năm"));

var no = false;

var nămchiahetcho4 = year % 4 == 0;
if (nămchiahetcho4){
    var nămchiahetcho100 = year % 100 == 0;
    if (nămchiahetcho100){
        var nămchiahetcho400 = year % 400 ==0;
        if(nămchiahetcho400){
            no = true;
        }
    }else {
        no = true;
    }
}
if (no){
    alert(year + 'nhuận');
}else{
    alert(year + 'ko phải năm nhuận');
}
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 ==0){
            alert(year + "no");
        }else {
            alert(year + "yes");
        }
    }else {
        alert(year + "");
    }
}else {
    alert(year + '');
}