function tracker(){
    var A= parseFloat(document.getElementById("a").value);
    var B= parseFloat(document.getElementById("b").value);
    var C= parseFloat(document.getElementById("c").value);
    if((A+B)<=C || (B+C)<=A || (C+A)<=B){
        document.getElementById('response').innerHTML="Not a triangle"
    }
};