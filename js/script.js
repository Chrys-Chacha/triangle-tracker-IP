function tracker(){
    var A= parseFloat(document.getElementById("a").value);
    var B= parseFloat(document.getElementById("b").value);
    var C= parseFloat(document.getElementById("c").value);
    
    if((A+B)<=C || (B+C)<=A || (C+A)<=B){
        document.getElementById('response').innerHTML="Not a triangle"
    }
    else if ((A===B) && (B===C) && (C===A)){
        document.getElementById('response').innerHTML="Equilateral triangle"
    }
    else if ((A===B) || (B===C) || (C===B)){
        document.getElementById('response').innerHTML="Isosceles triangle"
    }
    else if ((A!==B) && (B!==C) && (C!==A)){
        document.getElementById('response').innerHTML="Scalene triangle"
    }
    else{
        document.getElementById('response').innerHTML="Enter the values"
    }
};