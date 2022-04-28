var arr = [];
document.getElementById("btnThemSP").onclick = function() {
    var h4 = "Thêm mới";
    document.getElementsByClassName("modal-title").innerHTML = h4;
    var footer = ` <button class="btn btn-success" onclick="add()">Thêm</button>`;
    document.getElementById("btn-footer").innerHTML = footer;
}