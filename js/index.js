
function sendMail() {

  var bookingId = generateBookingId();
  var totalPrice = calculateTotalPrice();
  var params = {
    bookingId: bookingId, // Include booking ID in params
    package: document.getElementById("package").value,
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      tId: document.getElementById("tId").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      adults: document.getElementById("adults").value,
      children: document.getElementById("children").value,
      datetime: document.getElementById("datetime").value,
      totalPrice: totalPrice ,
      campAddress:"https://maps.app.goo.gl/pAuLWo5P9cA2KMCf7"
      
  };

  const serviceID = "service_nongzkm";
  const templateID = "template_i81gjwv";

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          // Reset form fields
          document.getElementById("package").value = "";
          document.getElementById("name").value = "";
          document.getElementById("address").value = "";
          document.getElementById("tId").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("email").value = "";
          document.getElementById("adults").value = "";
          document.getElementById("children").value = "";
          document.getElementById("datetime").value = "";

          console.log(res);
         
      })
      .catch(err => console.log(err));
}

function calculateTotalPrice() {
  var adults = parseInt(document.getElementById("adults").value);
  var pricePerAdult = 0;
  var packageValue = document.getElementById("package").value;
  if (packageValue === "Basic") {
      pricePerAdult = 999;
  } else if (packageValue === "Premium") {
      pricePerAdult = 1299; // Adjusted the price for Premium package
  }
  var totalPrice = adults * pricePerAdult;
  return totalPrice;
}


function generateBookingId() {
  // Generate a unique booking ID using Date.now() and a random number
  return "BOOK-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
}
