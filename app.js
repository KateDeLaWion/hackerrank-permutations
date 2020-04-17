let a="1100";
let b="1001";

let aCountOne=0;
let aCountTwo=0;
let aCountThree=0;
let aCountFour=0;
let aCountFive=0;
let aCountSix=0;
let aCountSeven=0;
let aCountEight=0;
let aCountNine=0;

let bCountOne=0;
let bCountTwo=0;
let bCountThree=0;
let bCountFour=0;
let bCountFive=0;
let bCountSix=0;
let bCountSeven=0;
let bCountEight=0;
let bCountNine=0;

for (let i=0 ; i<=a.length-1; i++){
  if( a[i] == "1" ){ aCountOne++; } 
  if( a[i] == "2" ){ aCountTwo++; }
  if( a[i] == "3" ){ aCountThree++; }
  if( a[i] == "4" ){ aCountFour++; }
  if( a[i] == "5" ){ aCountFive++; }
  if( a[i] == "6" ){ aCountSix++; }
  if( a[i] == "7" ){ aCountSeven++; }
  if( a[i] == "8" ){ aCountEight++; }
  if( a[i] == "9" ){ aCountNine++; }
  
}


for (let j=0 ; j<=b.length-1; j++){

    if( b[j] == "1" ){ bCountOne++; } 
    if( b[j] == "2" ){ bCountTwo++; }
    if( b[j] == "3" ){ bCountThree++; }
    if( b[j] == "4" ){ bCountFour++; }
    if( b[j] == "5" ){ bCountFive++; }
    if( b[j] == "6" ){ bCountSix++; }
    if( b[j] == "7" ){ bCountSeven++; }
    if( b[j] == "8" ){ bCountEight++; }
    if( b[j] == "9" ){ bCountNine++; }
    
  }

  if (
      aCountOne == bCountOne &&
      aCountTwo == bCountTwo &&
      aCountThree == bCountThree &&
      aCountFour == bCountFour &&
      aCountFive == bCountFive &&
      aCountSix == bCountSix &&
      aCountSeven == bCountSeven &&
      aCountEight == bCountEight &&
      aCountNine == bCountNine ){
     console.log("similar");

     allCombinations(a);

       }else{
      console.log("Not similar")

      allCombinations(b);
    }


 function allCombinations(string) {
            let resultArr = [];
          
            if (string.length == 1) {
                resultArr.push(string);
              return resultArr;
            }
          
            for (let i = 0; i < string.length; i++) {
              let firstChar = string[i];
              let charLeft = string.substring(0, i) + string.substring(i + 1);
              let innerCombinations = allCombinations(charLeft);
              for (let j = 0; j < innerCombinations.length; j++) {
                resultArr.push(firstChar + innerCombinations[j]);
              }
            }
            
            return resultArr;
          }


             console.log(allCombinations(a));
             console.log(allCombinations(a).length);




    
    






        //  function allCombinations(string) {
        //     let results = [];
          
        //     if (string.length === 1) {
        //       results.push(string);
        //       return results;
        //     }
          
        //     for (let i = 0; i < string.length; i++) {
        //       let firstChar = string[i];
        //       let charsLeft = string.substring(0, i) + string.substring(i + 1);
        //       let innerCombinations = allCombinations(charsLeft);
        //       for (let j = 0; j < innerCombinations.length; j++) {
        //         results.push(firstChar + innerCombinations[j]);
        //       }
        //     }
         
        //     return results;
        //   }
    
        //      console.log(allCombinations(a));
  
    