function register(event) {
    event.preventDefault();
    var name = document.getElementById("username").value
    var email = document.getElementById("useremail").value
    var password = document.getElementById("userpassword").value
    var confirmpassword = document.getElementById("userconfirmpassword").value

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("faceBookUsers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword
                    }
                    Ls.push(userdata);
                    localStorage.setItem("faceBookUsers", JSON.stringify(Ls))
                    alert("Registration Successful")
                    window.location.href="login.html"
                    document.getElementById("username").value = ""
                    document.getElementById("useremail").value = ""
                    document.getElementById("userpassword").value = ""
                    document.getElementById("userconfirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist")
                }
            }
            else {
                alert("password not match");
            }

        } else {
            alert("password should  include 8 or more characters");
        }
    } else {
        alert("please fill all fields");
    }

}


//login 
function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;

    var Ls = JSON.parse(localStorage.getItem("faceBookUsers"));

    var currentUser;
    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser=Ls[i];
        }
    }
    if (flag == true) {
        localStorage.setItem("faceBookCurrentUser", JSON.stringify(currentUser))
        window.location.href='./home.html';
        alert("login successfull")
    }
    else {
        alert("Credintails not matched")
    }

}