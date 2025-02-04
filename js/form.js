function checkName(){
    var nameBox = document.getElementById("name");
    var name = nameBox.value;
    
    if (name.length < 4){
        nameBox.style.borderColor = "red";
    }
    else{
        nameBox.style.borderColor = "green";
    }
}

function checkEmail(){
    var emailBox = document.getElementById("email");
    var email = emailBox.value;
    
    var pattern = /.+@.+\..+/;
    
    if (pattern.test(email)){
        emailBox.style.borderColor = "green";
    } else {
        emailBox.style.borderColor = "red";
    }
}

function updateProductID() {
    var reason = document.getElementById("reason");
    var productIDLabel = document.getElementById("productLabel");
    var productIDBox = document.getElementById("productID");
    
    var opts = productIDBox.options;
    var si = productIDBox.selectedIndex;
    var sel = opts[si];
            
    if (sel.index == 2) {
        productIDLabel.className = "visible"
        productIDBox.className = "textbox visible"
    } else {
        productIDLabel.className = "hidden"
        productIDBox.className = "textbox hidden"
    }
}

function checkProductID(){
    var productIDBox = document.getElementById("productID");
    var productID = productIDBox.value;
    
    if (productID == "BP1"){
        productIDBox.style.borderColor = "green";
    } else if (productID == "VS1"){
        productIDBox.style.borderColor = "green";
    } else if (productID == "MB1"){
        productIDBox.style.borderColor = "green";
    } else if (productID == "PL1"){
        productIDBox.style.borderColor = "green";
    } else if (productID == "PT1"){
        productIDBox.style.borderColor = "green";
    } else if (productID == "TC1"){
        productIDBox.style.borderColor = "green";
    } else {
        productIDBox.style.borderColor = "red";
    }
}

function checkMessage(){
    messageBox = document.getElementById("message");
    message = messageBox.value;
    
    if (message.length < 10){
        messageBox.style.borderColor = "red";
    } else if (message.length > 30){
        messageBox.style.borderColor = "red";
    } else {
        messageBox.style.borderColor = "green";
    }
}

function scroll(){
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = 0.5;
    var b= 0;
    
    newY = m*t + b;
    para.style.backgroundPositionY = newY + "px";
    
    var msg = document.getElementById("msg");
    if (t > 2000) {
         msg.style.marginLeft = "0px";
    }
}
