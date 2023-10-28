      function displayCarDetails(CarType) {
         document.getElementById("CarType").innerHTML = CarType;
         document.getElementById("CarTypePurchase").innerHTML = CarType;
         document.getElementById("CarTypePayment").innerHTML = CarType;
         document.getElementById("CarDetailsContainer").style.display = "block";
      }

      function displayPurchase() {
         document.getElementById("purchaseContainer").style.display = "block";
         document.getElementById("CarDetailsContainer").style.display = "none";
      }

      function displayPayment() {
         var customerName = document.getElementById("customerName").value;
         var CarType = document.getElementById("CarTypePurchase").innerHTML;
         var withAC = document.getElementById("withAC").checked ? "with AC" : "without AC";
         var price = withAC === "with AC" ? "$500000" : "$300000";
         document.getElementById("customerDetails").innerHTML = customerName + " (" + withAC + ")";
         document.getElementById("price").innerHTML = price;
         document.getElementById("paymentContainer").style.display = "block";
         document.getElementById("purchaseContainer").style.display = "none";
      }

      function returnHome() {
         document.getElementById("paymentContainer").style.display = "none";
         document.getElementById("homeContainer").style.display = "block";
      }
   