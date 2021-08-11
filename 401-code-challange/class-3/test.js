

let numArray = [10,15,16,18,5];


let searchBainary = (arr, num) => {
    let highIndex = arr.length - 1;
    let lowIndex = 0;
    let middelIndex = Math.round((highIndex + lowIndex) / 2);
    let counter = 0;
    if (arr[lowIndex] == num) {
        return lowIndex
    } else
        if (arr[highIndex] == num) {
            return highIndex
        } else
            if (arr[middelIndex] == num) {
                return middelIndex
            } else {
                while (arr[lowIndex] != num && arr[highIndex] != num && arr[middelIndex] != num) {
                    counter++
                    if(num<arr[middelIndex]){highIndex=middelIndex,
                        middelIndex = Math.round((highIndex + lowIndex) / 2)
                    }else
                    if (num>arr[middelIndex]){lowIndex=middelIndex,
                        middelIndex = Math.round((highIndex + lowIndex) / 2)
                    }
                    if(arr[lowIndex]==num){return lowIndex}else
                    if(arr[highIndex]==num){return highIndex}else
                    if(arr[middelIndex]==num){return middelIndex}
                    else if(counter == 20){

                        return -1
                    }

                }
            }

        }
        
        searchBainary(numArray,16);