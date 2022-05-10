const findFrequent =(array)=>{
   let item;
   let count = 1;
   for(let i = 0; i<array.length; i++){
       let variable = 0;
       for(let j = i; j< array.length; j++){
           if(array[i] === array[j]){
               variable++;
               if(variable > count){
                   count = variable;
                   item = array[i];
               }
           }
       }
   }


   console.log(item);
}

findFrequent([3, 7, 3])
findFrequent([ null, "hello", true, null])
findFrequent([false, "up", "down", "left", "right", true, false]);