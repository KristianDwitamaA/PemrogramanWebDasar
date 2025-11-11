function validateForm() {
    var nama = document.forms["frmValidasi"]["nama"].value;
    var umur = document.forms["frmValidasi"]["umur"].value;
    var email = document.forms["frmValidasi"]["email"].value;

    if (nama == "" || umur == "" || email == "") {
        alert("Semua field harus diisi!");
        return false;
    }

    if (isNaN(umur)) {
        alert("Umur harus berupa angka!");
        return false;
    }

    var regexEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    alert("Data berhasil dikirim!");
    return true;
}
