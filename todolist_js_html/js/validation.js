function Validation() {
    this.kiemTraRong = function (input, mess) {
        if (input === "") {
            alert(mess);
            return false
        };
        return true;

    };

}