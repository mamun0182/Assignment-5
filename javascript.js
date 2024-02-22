 
 const allseat= document.getElementsByClassName("seat-number");
 
  for( const seat of allseat){
    seat.addEventListener("click", function(event){
        const seatNumber = event.target.innerText;


        const totalSeatNumber =document.getElementById("seat-list");

        event.target.setAttribute("disabled", false);
        

        const ltdSeat = convertStringToNumber("seat-cound");
        if(ltdSeat + 1 > 4){
            alert("you can no longer select seats");
            return;
        }

        event.target.style.backgroundColor="lime";

      const seatCound = convertStringToNumber("seat-cound");
      document.getElementById("seat-cound").innerText = seatCound + 1;
      const totalSeat = convertStringToNumber("total-seat");
      document.getElementById("total-seat").innerText = totalSeat - 1;



        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-between");
        div.classList.add("px-3");
        

        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        p1.innerText = seatNumber;
        p2.innerText = "Economoy";
        p3.innerText = "550";

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        totalSeatNumber.appendChild(div);

        updateTotalCost(p3.innerText);
        updateGrandTotal();

  
    })
  }
 




function updateGrandTotal(status) {
    const TotalPrice = convertStringToNumber("total-price");
  
    if (status === undefined) {
        if (!isNaN(TotalPrice)) {
            document.getElementById("Grand-Total").innerText = TotalPrice;
        } else {
            console.error("Invalid total price. Please check the 'total-price' element.");
        }
    } else {
        const CouponCode = document.getElementById("Coupon-Code").value;
  
        if (CouponCode === "NEW15") {
            document.getElementById("Grand-Total").innerText = TotalPrice - TotalPrice * 0.2;
        } else if (CouponCode === "Couple20") {
            const offer = TotalPrice * 0.15;
            document.getElementById("Grand-Total").innerText = TotalPrice - offer;
        } else {
           alert("Invalid coupon code. Please check your coupon code.");
        }
    }
  }




document.getElementById("Continue").addEventListener("click", function () {
    const loginArea = document.getElementById("header");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("success");
    transactionArea.style.display = "block";
  });





 function updateTotalCost (value){
   
    const TotalPrice = convertStringToNumber("total-price");
    const sum = TotalPrice + parseInt(value);
    document.getElementById('total-price').innerText = sum;
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function convertStringToNumber(id) {
   const Value= document.getElementById(id).innerText;
 const convertValue = parseInt(Value);
 return convertValue;
 }