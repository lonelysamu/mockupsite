
let database = 
[
    ["Teh Tarik","RM5.90","image/pic1v2.jpg"],
    ["White Coffee","RM6.90","image/pic2v2.jpg"],
    ["Long Black","RM4.50","image/pic3v2.jpg"],
    ["Espresso","RM8.90","image/pic4v2.jpg"]
]

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.classList.contains("loadmodalbutton") == true) {
        y = Array.from(document.querySelector('#contentbox').getElementsByClassName("loadmodalbutton")).indexOf(e.target);
        document.getElementById("headerimage").src = database[y][2];
        document.getElementById("beveragename").innerHTML = database[y][0];
        document.getElementById("pricing").innerHTML = database[y][1];
    }

    else if(e.target.id == "closemodal"){
        document.getElementById("videoframe").src = "...";
    }
    else if((e.target.id == "exampleModal") && (e.target.classname != "modal-header") && (e.target.classname != "modal-body")){
        document.getElementById("videoframe").src = "...";
    }
    else{
    }
    })