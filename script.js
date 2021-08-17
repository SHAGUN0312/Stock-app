const purchasePrice = document.querySelector("#purchase-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const output = document.querySelector("#output");

document.addEventListener("submit", clickHandler);

function clickHandler(e) {
  e.preventDefault();
  var pp = Number(purchasePrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(pp, qty, curr);
}

function calculateProfitAndLoss(purchase, quantity, current) {
  if (purchase > current) {
    var loss = ((purchase - current) * quantity).toFixed(2);
    var lossPercentage = (((purchase - current) * 100) / purchase).toFixed(2);
    output.innerText = `Hey, the Loss is ${loss} and the Percentage is ${lossPercentage}%`;
    output.style.color = "red";
  } else if (current > purchase) {
    var profit = ((current - purchase) * quantity).toFixed(2);
    var profitPercentage = (((current - purchase) * 100) / purchase).toFixed(2);
    output.innerText = `Hey, the Profit is ${profit} and the Percentage is ${profitPercentage}%`;
    output.style.color = "rgb(64, 255, 64)";
  } else {
    output.innerText = "No pain no gain, no gain no pain !";
    output.style.color = "wheat";
  }
}
