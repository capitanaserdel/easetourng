// //// Fund Ease Tour Coin
const fundTWallet = document.getElementById("fundTourWallet")
const buyTC = document.getElementById("buyTC")
const closeFund = document.getElementById("closeFund")
fundTWallet.addEventListener('click', () =>{
    buyTC.classList.remove("hidden")
})

closeFund.addEventListener('click', () =>{
    buyTC.classList.toggle("hidden")
})



// // // //Dollar to Ease Tour coin
let dollar = document.getElementById("dollar");
let tourCoin = document.getElementById("tourCoin");
let purchaseBtn = document.getElementById("purchaseBtn");
    dollar.addEventListener('keyup', () => {
        let digit = dollar.value
        tourCoin.value = Number(digit) * 500
        if(digit.length >= 1){
            document.getElementById("purchaseBtn").disabled = false
            purchaseBtn.classList.remove("bg-gray-200")
            purchaseBtn.classList.add("bg-green-500")
        }
        else{
            console.log("to much")
            document.getElementById("purchaseBtn").disabled = true
            purchaseBtn.classList.remove("bg-gray-500")
            purchaseBtn.classList.add("bg-green-500")
        }
    })

// select Purcahse Card
const purchaseWithCard = document.getElementById("purchaseWithCard")
const closePurchaseCard = document.getElementById("closePurchaseCard")
const proceedPurchaseBtn = document.getElementById("proceedPurchaseBtn")
const purchaceSucessfull = document.getElementById("purchaceSucessfull")
const done = document.getElementById("done")
    purchaseBtn.addEventListener('click', () =>{
        purchaseWithCard.classList.remove("hidden")
        buyTC.classList.toggle("hidden")
    })

    proceedPurchaseBtn.addEventListener('click', () =>{
        purchaseWithCard.classList.toggle("hidden")
        purchaceSucessfull.classList.toggle("hidden")
    })

    closePurchaseCard.addEventListener('click', () =>{
        purchaseWithCard.classList.toggle("hidden")
    })

    // Purchase done modal
    done.addEventListener('click', () => {
        purchaceSucessfull.classList.toggle("hidden")
    })




// // Redeem Ease Tour coin
const redeemTWallet = document.getElementById("redeemTWallet")
const redeemTC = document.getElementById("redeemTC")
const redeemSucessfull = document.getElementById("redeemSucessfull")
const closeRedeem = document.getElementById("closeRedeem")
const redeemSucessBtn = document.getElementById("redeemSucessBtn")
const redeemdone = document.getElementById("redeemdone")
    redeemTWallet.addEventListener('click', () =>{
        redeemTC.classList.toggle("hidden")
    })
    redeemSucessBtn.addEventListener('click', () =>{
        redeemSucessfull.classList.toggle("hidden")
        redeemTC.classList.toggle("hidden")
    })

    closeRedeem.addEventListener('click', () =>{
        redeemTC.classList.toggle("hidden")
    })


    // redeem done modal
    redeemdone.addEventListener('click', () => {
        redeemSucessfull.classList.toggle("hidden")
    })

let inputtCoin = document.getElementById("inputtCoin");
let receivedollar = document.getElementById("receivedollar");
    inputtCoin.addEventListener('keyup', () => {
        let digit = inputtCoin.value
        receivedollar.value = Number(digit) * 0.0005
    })


