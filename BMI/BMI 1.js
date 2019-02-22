var a = prompt('nhập chiều cao');
var b = prompt('nhập cân nặng ');
var bmi = (  (a / ( b * 2 )) );
if (bmi < 18) {
    document.write("Underweight");
}else if (bmi < 25) {
    document.write('Normal');
}else if (bmi < 30.0) {
    document.write('Overweight');
}else {
    document.write("obese");
}