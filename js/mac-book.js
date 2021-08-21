// common function for getting all button input
function macBookProCost(component, cost) {
    const componentCost = document.getElementById(component + "-cost")
    console.log(componentCost);
    const previousMemoryCost = parseInt(componentCost.innerText);
    componentCost.innerText = cost;
    getTotalCost();
}


// get input for calculation section
function getInputCost(product) {
    const productInput = document.getElementById(product + "-cost")
    const productNumber = parseInt(productInput.innerText)
    return productNumber;

}


// total cost calculation
function getTotalCost() {
    const bestCost = getInputCost("best");
    const memoryCost = getInputCost("memory");
    const storageCost = getInputCost("storage");
    const deliveryCost = getInputCost("delivery");


    const subTotal = bestCost + memoryCost + storageCost + deliveryCost

    document.getElementById("total-cost").innerText = subTotal

    document.getElementById("discount-cost").innerText = subTotal


    // discount price calculation
    function discountPrice() {
        const promoCode = document.getElementById("promo-input")
        if (promoCode.value == "stevekaku") {
            const discount = subTotal * 0.8
            document.getElementById("discount-cost").innerText = discount;
        }
        promoCode.value = ""
    }
    discountPrice();
}




// memory cost handling function
document.getElementById("8gb-memory").addEventListener('click', function () {
    macBookProCost("memory", 0);
})

document.getElementById("16gb-memory").addEventListener('click', function () {
    macBookProCost("memory", 180)
})



// storage cost handling function
document.getElementById("256gb-storage").addEventListener('click', function () {
    macBookProCost("storage", 0)
})

document.getElementById("512gb-storage").addEventListener('click', function () {
    macBookProCost("storage", 100)
})

document.getElementById("1tb-storage").addEventListener('click', function () {
    macBookProCost("storage", 180)
})


// delivery cost handling function
document.getElementById("delivery-option1").addEventListener('click', function () {
    macBookProCost("delivery", 0)
})
document.getElementById("delivery-option2").addEventListener('click', function () {
    macBookProCost("delivery", 20)
})



// promo code handler function
document.getElementById("discount-btn").addEventListener('click', function () {
    getTotalCost()
})