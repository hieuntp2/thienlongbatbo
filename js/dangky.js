$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  removeSpaceNameInput();

  registerPasswordListner();

  $("#form-dang-ky").submit(function (e) {
    submitData(e);
  });

  function registerPasswordListner() {
    var password = document.getElementById("matkhau"),
      confirm_password = document.getElementById("matkhau2");

    function validatePassword() {
      if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Mật khẩu không trùng khớp");
      } else {
        confirm_password.setCustomValidity("");
      }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
  }

  function submitData(e) {
    if (e) e.preventDefault(); // avoid to execute the actual submit of the form.

    // covert data to urlData
    var form = $(this);
    var urlFormData = form.serialize();
    var url =
      "https://account.tlbbtrungphung.us/general/public/register?" +
      urlFormData;

    $.ajax({
      type: "POST",
      url: url,
      // data: data, // serializes the form's elements.
      success: function (data) {
        if (data.returnCode == 1) {
          // thanh cong
          $("#resultModalHeader").html("Thành công");
          $("#resultMessageP").html("Tạo tài khoản thành công");
        } else {
          // that bai
          $("#resultModalHeader").html("Lỗi");
          $("#resultMessageP").html(data.returnMessage);
        }

        $("#resultModal").modal("show");
      },
      error: function (xhr, textStatus, errorThrown) {
        console.error("error: xhr", xhr);
        console.error("error: errorThrown", errorThrown);
        $("#resultModalHeader").html("Lỗi: ", textStatus);
        $("#resultMessageP").html("Có lỗi xảy ra! Hãy thử lại sau.");
        $("#resultModal").modal("show");
      },
    });
  }

  function removeSpaceNameInput() {
    const nameInputEl = $("#taikhoan");
    nameInputEl.keyup(function () {
      nameInputEl.val($.trim(nameInputEl.val()).replace(/\s/g, ""));
    });
    nameInputEl.blur(function () {
      nameInputEl.val($.trim(nameInputEl.val()).replace(/\s/g, ""));
    });
  }
});
