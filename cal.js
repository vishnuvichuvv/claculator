function display(num){
    result.value+=num         //value replace aavathe add aayivaran ane engane cheyunath
}


function allclear(){
    result.value=" "
}

function evaluateexp(){
    result.value=eval(result.value)
}

function backspace(){
    // data=result.value
    // s=data.slice(0,-1)
    // result.value=s
result.value=result.value.slice(0,-1)
}