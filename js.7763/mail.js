


const firebaseConfig = {
  apiKey: "AIzaSyDXkG10d12Ifb8mNrIN3jd9LhxGFcGXGcI",
  authDomain: "userdetail-pawana-lake-camp.firebaseapp.com",
  databaseURL:
    "https://userdetail-pawana-lake-camp-default-rtdb.firebaseio.com",
  projectId: "userdetail-pawana-lake-camp",
  storageBucket: "userdetail-pawana-lake-camp.appspot.com",
  messagingSenderId: "212322920303",
  appId: "1:212322920303:web:f0040f4a4ec2d27b6c6a9a",
};

firebase.initializeApp(firebaseConfig);

var bookingFormDB = firebase.database().ref("bookingForm");

document.getElementById("userD").addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve form data
    var selectedPackage = getElementVal("package");
    var name = getElementVal("name");
    var address = getElementVal("address");
    var tId = getElementVal("tId");
    var mobile = getElementVal("mobile");
    var email = getElementVal("email");
    var adults = getElementVal("adults");
    var children = getElementVal("children");
    var datetime = getElementVal("datetime");

    var totalPrice = calculateTotalPrice();
    document.getElementById("totalPriceInput").value = totalPrice;

    // Save form data to Firebase
    bookingFormDB.push({
        selectedPackage: selectedPackage,
        name: name,
        address: address,
        tId: tId,
        mobile: mobile,
        email: email,
        adults: adults,
        children: children,
        datetime: datetime,
        totalPrice: totalPrice
    });
    
     Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your booking has been sent successfully!',
    });


    // Reset the form
    this.reset();

   
});

function getElementVal(id) {
    return document.getElementById(id).value;
}

function calculateTotalPrice() {
    var adults = parseInt(document.getElementById("adults").value);
    var pricePerAdult = 0;
    var packageValue = document.getElementById("package").value;
    if (packageValue === 'Basic') {
        pricePerAdult = 999;
    } else if (packageValue === 'Premium') {
        pricePerAdult = 999;
    }
    return adults * pricePerAdult;
}