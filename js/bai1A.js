const Sort = (array) => {
    const arrayNumber = array;
    let temp = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        for (let j = i + 1; j < arrayNumber.length; j++) {
            if (arrayNumber[i] < arrayNumber[j]) {
                temp = arrayNumber[i];
                arrayNumber[i] = arrayNumber[j];
                arrayNumber[j] = temp;
            }
        }
    }
    return arrayNumber;
}

const findMax5 = (array) => {
    const arr5Maxnumber = [];

    const arrayNumber = Sort(array);


    for (let i = 0; i < 5; i++) {
        if (arrayNumber[i] != null) {
            arr5Maxnumber.push(arrayNumber[i]);
        }else{
            break;
        }
    }
    console.log(arr5Maxnumber);
}

findMax5([3,4,5,3,2,3,10,11]);
findMax5([14,12,38,17,10,36,12,29,45,34,48,22]);
findMax5([10,11,2,30,22,6,8,9,11,12,22]);
findMax5([1,2,3]);