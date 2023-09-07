
function operator_checking(inputval){
    operators = ["+","-","*","/"];
    let count = 0;

    for(i=0; i< inputval.length; i++){
        if(operators.includes(inputval[i])){
            count++;
        }
    return count;
}
}

function operator_num(){
    const inputselect = document.querySelector(".display input");
    const inputval = inputselect.value;
    if(operator_checking(inputval) > 1){
        let a = "math error"
        return a;
    }
    else{
        const answer = eval(inputval);
        console.log("Answer:", answer);
        return answer;
    }
}


