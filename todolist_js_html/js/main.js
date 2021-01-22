function getEle(id) {
    return document.getElementById(id);
}
var dst = new DanhSachTask();
getLocalStorage();
getEle("addItem").addEventListener("click", function () {
    var add = getEle("newTask").value;
    var task = new AddTask(add);
    dst.addListTask(task);
    taoBang_toDo(dst.arr);
    setLocalStorage();
    console.log(task);
});
function xoa(name) {
    dst.deleteTask(name);
    taoBang_toDo(dst.arr);
    setLocalStorage();
    console.log(name);

};
function check(name) {
    dst.checkBox(name);
    taoBang_complete(dst.arr);
    setLocalStorage();
    console.log(name);
}
function taoBang_toDo(arr) {
    var contentToDo = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].status === "toDo") {
            contentToDo += `
                <li>
                    ${arr[i].name}
                    <i onclick="xoa('${arr[i].name}')" class="far fa-trash-alt"></i>
                    <i onclick="check('${arr[i].name}')" class="far fa-check-circle"></i>
                </li>

            `
        }
    };
    getEle("todo").innerHTML = contentToDo;
};
function taoBang_complete(arr) {
    var contentcomplete = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].status === "complete") {
            contentcomplete += `
                <li>
                    ${arr[i].name}
                    <i onclick="xoa('${arr[i].name}')" class="far fa-trash-alt"></i>
                    <i onclick="check('${arr[i].name}')" class="far fa-check-circle"></i>
                </li>

            `
        }
    };
    getEle("completed").innerHTML = contentcomplete;
}

function setLocalStorage() {
    //chuyển kiểu JSON sang string(JSON.stringify)
    var arrString = JSON.stringify(dst.arr);
    //lưu xuống local storage
    localStorage.setItem("DSSV", arrString);
};
function getLocalStorage() {
    if (localStorage.getItem("DSSV")) {
        dst.arr = JSON.parse(localStorage.getItem("DSSV"));
        taoBang_toDo(dst.arr);
    }

};