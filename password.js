
function checkPassword() {
            var password = "vuulinox"
            var userInput = document.getElementById("pswd").value;
    
            if (userInput === password) {
                // Password is correct, show the content
                document.getElementById("protectedContent").style.display = "block";
            } else {
                // Password is incorrect, redirect or show an error
                alert("Incorrect password. You will be redirected.");
               
            }
        }
