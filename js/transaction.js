function validateTransactionId(transactionId) {
    // Check if transactionId is not empty
    if (transactionId.trim() === "") {
        return false; // Transaction ID is empty
    }

    // Define regular expression pattern for transaction ID format
    var pattern = /^[A-Za-z0-9]{8}$/; // Assuming transaction ID consists of 8 alphanumeric characters

    // Check if transactionId matches the pattern
    if (!pattern.test(transactionId)) {
        return false; // Transaction ID format is invalid
    }

    // Additional checks, if needed...

    // Transaction ID is valid
    return true;
}

var transactionId = document.getElementById("tId").value;
if (validateTransactionId(transactionId)) {
    // Transaction ID is valid, proceed with form submission
    // Or perform other actions
} else {
    // Transaction ID is invalid, display an error message to the user
}

