function Validation() {
    this.kiemTraRong = function (input, alert) {
        if (input === "") {
            alert("vui lòng nhập");
            return false
        };
        return true;

    };

}