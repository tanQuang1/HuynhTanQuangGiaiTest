

$(document).ready(() => {

    function checkNull(value, idErr) {
        if (value.trim() === "") {
            $(`#${idErr}`).html("Không được để trống");
        }
    };

    // hàm check name 

    $("#exampleInputName").blur(() => {
        checkName();
    });

    function checkName() {
        let valueName = $("#exampleInputName").val();
        checkRegxName(valueName);
        checkNull(valueName, "err__name");
    };


    function checkRegxName(value) {
        let regex = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
        if (value != "") {
            if (regex.test(value)) {
                $("#err__name").html("");
            } else {
                $("#err__name").html("Tên không được có số và kí tự đặt biệt");
            }
        }
    };

    //    hàm check email
    $("#exampleInputEmail1").blur(() => {
        let valueEmail = $("#exampleInputEmail1").val();
        checkRegexEmail(valueEmail);
        checkNull(valueEmail, "err__email");
    })

    function checkRegexEmail(value) {
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(value)) {
            $("#err__email").html("");
        } else {
            $("#err__email").html("Gmail nhập không hợp lệ");
        }
    }


    //  hàm check phone 
    $("#exampleInputTel").blur(() => {
        let valuePhone = $("#exampleInputTel").val();
        checkRegexPhone(valuePhone);
        checkNull(valuePhone, "err__phone");
    })

    function checkRegexPhone(value) {
        let regexPhone = /^[0-9]+$/;
        if (regexPhone.test(value)) {
            $("#err__phone").html("");
        } else {
            $("#err__phone").html("Số điện thoại không hợp lệ");
        }
    }

    $("#exampleInputContent").blur(() => {
        let valueContent = $("#exampleInputContent").val();
        checkNull(valueContent, "err__content");
    })

    $("#button__submit").click(() => {
        let valueName = $("#exampleInputName").val();
        let valueEmail = $("#exampleInputEmail1").val();
        let valuePhone = $("#exampleInputTel").val();
        let valueContent = $("#exampleInputContent").val();

        checkRegxName(valueName);
        checkNull(valueName, "err__name");

        checkRegexEmail(valueEmail);
        checkNull(valueEmail, "err__email");

        checkRegexPhone(valuePhone);
        checkNull(valuePhone, "err__phone");

        checkNull(valueContent, "err__content");

        let errName = $("#err__name").html();
        let errEmail = $("#err__email").html();
        let errPhone = $("#err__phone").html();
        let errContent = $("#err__content").html();
        if (errName == "" && errEmail == "" && errPhone == "" && errContent == "") {
            const newInfor = new information(
                valueName,
                valueEmail,
                valuePhone,
                valueContent
            );

           alert(`Đã thêm thông tin
           Họ và Tên: ${newInfor.name}
           Email: ${newInfor.email}
           Phone: ${newInfor.phone}
           Nội dung: ${newInfor.content}
           `
           )

            console.log(newInfor);

            $("#exampleInputName").val("");
            $("#exampleInputEmail1").val("");
            $("#exampleInputTel").val("");
            $("#exampleInputContent").val("");
        }
    })

    $("#button__clearform").click(() => {
        $("#exampleInputName").val("");
        $("#exampleInputEmail1").val("");
        $("#exampleInputTel").val("");
        $("#exampleInputContent").val("");


        $("#err__name").html("");
        $("#err__email").html("");
        $("#err__phone").html("");
        $("#err__content").html("");
    })
})