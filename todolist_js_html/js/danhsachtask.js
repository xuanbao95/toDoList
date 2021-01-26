function DanhSachTask() {
    this.arr = [];
    this.addListTask = function (task) {
        this.arr.push(task);
    };
    this.deleteTask = function (name) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].name === name) {
                this.arr.splice(i, 1);
                break;
            };

        };
    };
    this.checkBox = function (name) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].name === name) {
                this.arr[i].status = "completed";
            };

        };
    }
    this.checkBox_2 = function (name) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].name === name) {
                this.arr[i].status = "toDo";
            };

        };
    }
}