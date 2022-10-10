let figureEl = document.getElementById('figure')
let numberItems = 0

let figureEll = document.getElementById('figuree')
let numberItems1 = 0

let figureElll = document.getElementById('figureee')
let numberItems2 = 0

let heartButo = document.getElementById('heartButton1')
let subTotalPrice = document.getElementById('subtotal')
let subPrice = 0

let checkoutPrice = document.getElementById('checkoutButton')
let heart = document.getElementById("heart-btn")
let heartTwo = document.getElementById("heart-btn2")
let heartThree = document.getElementById("heart-btn3")
//console.log('heartButton1:', heart )

// function color(){
//     if(heartButo.style.color =="red"){
//         heartButo.style.color = "gray"
//         }
//         else{
//             heartButo.style.color = "red"
//         }
// }

function Toggle1(){
    if (heartTwo.style.color == "red"){
        heartTwo.style.color = "grey"  
    }else {
        heartTwo.style.color = "red"
    }
}

function Toggle2(){
    if (heartThree.style.color == "red"){
        heartThree.style.color = "grey"  
    }else {
        heartThree.style.color = "red"
    }
}


// heart.addEventListener('click', function(){
//   heart.innerHTML = '<img src="heart2.svg"  width="20" height="20" >'
//  })
//  heart.addEventListener('click', function(){
//                 if(heart.innerHTML = '<img src="heart.svg"  width="20" height="20" >'){
  
//               } else{
//                 heart.innerHTML = '<img src="heart2.svg"  width="20" height="20" >'
//               }
// })




for(i = 0; i < 101; i++){
    console.log([i])
   }







function plus(){
    numberItems += 1
    figureEl.innerText = numberItems
    subPrice += 250
    subTotalPrice.textContent = '$' + subPrice
    checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice

}

function minus(){
    if(numberItems > 0){
        numberItems -= 1
        figureEl.innerText = numberItems
        subPrice -= 250
        subTotalPrice.textContent = '$'+ subPrice
        checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
        }
        else {figureEl.innerText(0)
        };
        
}


function pluss(){
    numberItems1 += 1
    figureEll.innerText = numberItems1
    subPrice += 500
    subTotalPrice.textContent = '$' + subPrice
    checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
}

function minuss(){
    if(numberItems1 > 0){
        numberItems1 -= 1
        figureEll.innerText = numberItems1
        subPrice -= 500
        subTotalPrice.textContent = '$'+ subPrice
        checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
        }
        else {figureEll.innerText(0)
        };
        
    
}

function plusss(){
    numberItems2 += 1
    figureElll.innerText = numberItems2
    subPrice += 1000
    subTotalPrice.textContent = subPrice
    subTotalPrice.textContent = '$' + subPrice
    checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
}


function minusss(){
    if(numberItems2 > 0){
    numberItems2 -= 1
    figureElll.innerText = numberItems2
    subPrice -= 1000
    subTotalPrice.textContent = '$'+ subPrice
    checkoutPrice.textContent = 'CHECKOUT ' + '$' + subPrice
    }
    else {figureElll.innerText(0)
    };
    
    
}

