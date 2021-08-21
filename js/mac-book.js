//for getting all button input
function macBookProCost(element, cost) {
    const elementCost = document.getElementById(element + "-cost")
    // console.log(elementCost);
    // const previousMemoryCost = parseInt(elementCost.innerText);
    elementCost.innerText = cost;
    totalAmount();
}

//calculation section for input
function inputCost(product) {
    const productCostText = document.getElementById(product + "-cost");
    const productCostNumber = parseInt(productCostText.innerText);
    return productCostNumber;

}

// finding total amount
function totalAmount() {
    const fixedCost = inputCost("fixed");
    const changeableMemoryCost = inputCost("extra-memory");
    const changeableStorageCost = inputCost("extra-storage");
    const changeableDeliveryCost = inputCost("extra-delivery");

    const totalPrice = fixedCost + changeableMemoryCost + changeableStorageCost + changeableDeliveryCost;

    document.getElementById("total-cost").innerText = totalPrice;

    document.getElementById("total-percent-cost").innerText = totalPrice;

    // adding discount price
    function totalDiscount() {
        const promoInput = document.getElementById("promo-input")
        if (promoInput.value == "stevekaku") {
            const multiplyTotalPrice = totalPrice * 0.8;
            document.getElementById("total-percent-cost").innerText = multiplyTotalPrice;
        }
        promoInput.value = "";
    }
    totalDiscount();
}

//handler for memory
document.getElementById("memory-btn1").addEventListener('click', function () {
    macBookProCost("extra-memory", 0);
})

document.getElementById("memory-btn2").addEventListener('click', function () {
    macBookProCost("extra-memory", 180);
})

// handler for storage
document.getElementById("storage-btn1").addEventListener('click', function () {
    macBookProCost("extra-storage", 0);
})

document.getElementById("storage-btn2").addEventListener('click', function () {
    macBookProCost("extra-storage", 100);
})

document.getElementById("storage-btn3").addEventListener('click', function () {
    macBookProCost("extra-storage", 180);
})

// handler for delivery
document.getElementById("delivery-btn1").addEventListener('click', function () {
    macBookProCost("extra-delivery", 0);
})
document.getElementById("delivery-btn2").addEventListener('click', function () {
    macBookProCost("extra-delivery", 20);
})

// handler for promo code
document.getElementById("promo-code-btn").addEventListener('click', function () {
    totalAmount();
})