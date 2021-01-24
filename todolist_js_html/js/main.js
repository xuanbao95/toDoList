function getEle(id) {
    return document.getElementById(id);
}
var dst = new DanhSachTask();

getLocalStorage();
getEle("addItem").addEventListener("click", function () {
    var _name = getEle("newTask").value;
    var _status = "toDo";
    var task = new AddTask(_name, _status);
    dst.addListTask(task);
    taoBang(dst.arr);
    setLocalStorage();
    console.log(task);
});
function xoa(name) {
    dst.deleteTask(name);
    taoBang(dst.arr);
    setLocalStorage();
    console.log(name);

};
function check(name) {
    dst.checkBox(name);
    taoBang(dst.arr);
    setLocalStorage();
    console.log(name);
}
function taoBang(arr) {
    var contentToDo = "";
    var contentcomplete = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].status === "toDo") {
            contentToDo += `
                <li>
                    ${arr[i].name}
                    <i onclick="xoa('${arr[i].name}')" class="far fa-trash-alt"></i>
                    <i onclick="check('${arr[i].name}')" class="far fa-check-circle"></i>
                </li>
            `;
        } else {
            contentcomplete += `
        <li>
            ${arr[i].name}
            <i onclick="xoa('${arr[i].name}')" class="far fa-trash-alt"></i>
            <i onclick="check('${arr[i].name}')" class="far fa-check-circle"></i>
        </li>
    `;
        };
    };
    getEle("todo").innerHTML = contentToDo;
    getEle("completed").innerHTML = contentcomplete;
};


function setLocalStorage() {
    //chuyển kiểu JSON sang string(JSON.stringify)
    var arrString = JSON.stringify(dst.arr);
    //lưu xuống local storage
    localStorage.setItem("DSSV", arrString);
};
function getLocalStorage() {
    if (localStorage.getItem("DSSV")) {
        dst.arr = JSON.parse(localStorage.getItem("DSSV"));
        taoBang(dst.arr);

    }

};