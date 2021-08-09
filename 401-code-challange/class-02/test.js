let arrTest = [1,2,3,4,5];
let arrTest2 = [1,2,3,4,5,6];

const arrayInsertShift=(arr,value)=>{
    let newArray=[];

    if (arr.length%2==0){
        let middel = arr.length/2;

        for (let i = 0; i < arr.length; i++) {
            if (middel===i){
                newArray.push(value);
            
            }
            newArray.push(arr[i]);
            
        }
    }else{
        let middel = Math.ceil(arr.length/2);
        for (let i = 0; i < arr.length; i++) {
            if(middel==i){
                newArray.push(value);

            }
            newArray.push(arr[i]);
            
        }
    }
return newArray ;
}

console.log(arrayInsertShift(arrTest,0));
console.log(arrayInsertShift(arrTest2,0));
