$(start);

function start(){
    $("#btn").on("click",duck);
}

function duck(){
    //alert("hi");
    let myInputVal = $("#ducks").val();
    let newDiv =$("<div></div>");
    newDiv.load(`showImages.php?count=${myInputVal}`);
    $("#katherine").append(newDiv);
}