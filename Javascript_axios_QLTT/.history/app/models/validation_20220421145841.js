function Validation() {
    this.checkEmpty = function(value, errorId, mess) {
        //Validation
        if (value === "") {
            //Error
            getEle(errorId).addEventListener.innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
        // right
        getEle(errorId).addEventListener.innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    }
}