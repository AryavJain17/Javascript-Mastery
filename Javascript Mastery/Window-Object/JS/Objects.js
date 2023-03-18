console.log(window);

function getPageUrl() {
    let url = window.location,href;
    console.log(url);
}
getPageUrl();

function add() {
    let result = 4 + 5;
    let emp = JSON.stringify({"id": 111, "age": 33});

    //Data stored in localStorage is available until deleted explicitely
    window.localStorage.setItem("result", result);
    window.localStorage.setItem("Name", "John");//Data stored inside localStorage is in string format
    localStorage.setItem("empOne", emp);
    console.log(result);

}

function getStorageData() {
    let name = localStorage.getItem("name");
    let result = localStorage.getItem("result");
    let e = localStorage.getItem("empOne");

    console.log(typeof(name));
    console.log(typeof(result));
    console.log(typeof(e));//here e is a string

    console.log(name);
    console.log(parseInt(result));
    let empObj = JSON.parse(e);//converts string form of emp object to object form
    console.log(typeof(empObj));
    console.log(empObj);

    const {id, age} = empObj;//Object destructuring another feature of ES6
    console.log(id);
    console.log(age);
}

function clearData() {
    localStorage.clear();
}
