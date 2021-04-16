$(document).ready(function () {
  // $('[data-toggle="tooltip"]').tooltip();

  var password = document.getElementById("matkhau")
    , confirm_password = document.getElementById("matkhau2");

  function validatePassword() {
    if (password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Mật khẩu không trùng khớp");
    } else {
      confirm_password.setCustomValidity('');
    }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;

  $("#form-dang-ky").submit(function (e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    debugger
    var urlFormData = form.serialize();
    var url = 'https://account.tlbbtrungphung.us/general/public/register?' + urlFormData;

    $.ajax({
      type: "POST",
      url: url,
      // data: data, // serializes the form's elements.
      success: function (data) {
        alert(data); // show response from the php script.
      }
    });
  });

  function validationForm() {

  }
});

// enable tooltip
$(function () {
  $(document).tooltip();
});