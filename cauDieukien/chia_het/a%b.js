var a = (prompt("nhập a"));
var b = (prompt('nhập b'));
var mod = (a % b);

if (mod == 0){
    document.write("số này chia hết cho :" + b );
}else{
    document.write("số này ko chia hết cho :" + b );
}

