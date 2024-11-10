function alphanumeric(inputtxt) {
    var letters = /^\d{3}[a-za-Z]+$/;

    if (inputtxt.value.match(letters)) {
        alert('Your registration number has been accepted; you can try another.');
        document.form1.text1.focus();
        return true;
    } else {
        alert("Please input alphanumeric characters only.");
        return false;
    }
}
