// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    
    let result;
    
    if(block > 42){
        result = block - 42;
    }else if(block <42){
    result = 42 - block;
}
    return result;
}

function  distanceFromHqInFeet(b){
 
   let a = distanceFromHqInBlocks(b);
   
   return a *264;
    
}


function distanceTravelledInFeet(a, b){
    let result;
    if(a > b){
        result = (a-b) * 264;
    }else if(a < b){
        result = (b - a) * 264;
    }
    return result;
}
   
    function calculatesFarePrice(start, destination){
         
        let a = distanceTravelledInFeet(start, destination);
            let result;
          if (a < 400){
              result =  0;            
          }else if (a >= 400 && a <= 2000){
            result = 2.56;
          }else if (a >= 2000 &&  a <2500){
            result = 25;
          } else if (a >= 2500){
            result = `cannot travel that far`;
          }
        return result 
        
        }


    