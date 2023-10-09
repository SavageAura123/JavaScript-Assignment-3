let array =[1,2,2,3,3,4,4,5,5,5];
console.log(array);

function takeAction(arr){
    let object = new Object;
    if(Array.isArray(arr)){
        arr.forEach(item =>{
            if(object[item]){
                object[item] ++;
            }
            else{
                object[item] = 1;
            }
        })
        return object;
    }
    else{
        return "Invalid input!";
    }
};
console.log(takeAction(array));