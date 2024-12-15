var lesson = "JavaScript Functions";
document.getElementById("lesson").innerHTML = lesson;

function greet() {
    document.write("Hello! Welcome to the JavaScript Class!");
}
greet();

function welcome(name) {
    document.write(
        "Welcome" + name + "<br>"
    );
}
document.write("<br>");
welcome("Anyiam");
welcome("Kartik");
welcome("David");

function getSquare(num) {
    var result = num * num;
    return result;
}
document.write(getSquare(5))
document.write("<br>")

function getCube(num) {
    var result = num * num * num;
    return result;
}
document.write(getCube(2))
document.write("<br>")

function add(a = 5) {
    var b = 10
    return a + b
}
document.write(add())

document.write(b);