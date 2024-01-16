// VARIABLES
document.write("<h1>Javasrcipt variable</h1>")

console.log("hello")
var a = 67
console.log(a)

var b = 10
var c = 20
console.log(b+c)
document.write("javasricpt variables" )
document.write("<br>")

document.write(b+c)
document.write("<br>")
var d = 20
var e = 5
document.write("variable value :",d+e)
document.write("<br>")

// javasrcipt data type
document.write("<h1>Javasrcipt data type</h1>")

var num = 10; 
document.write("Data type" + (typeof num));
document.write("<br>")

var num = "10"; 
document.write("Data type" + (typeof num));
document.write("<br>")

var num = true; 
document.write("Data type" + (typeof num));
document.write("<br>")

var num = undefined; 
document.write("Data type" + (typeof num));
document.write("<br>")

num = [1,2,3,4,5,6,false,"string"]
document.write("Data type" + (typeof num));
document.write("<br>")

var num = {
    aiman : 1,
    kainat : 2,

}
document.write("Data type" + (typeof num));
document.write("<br>")


document.write("<br>")
var stmarks = {
    aiman : '1',
    kainat : '2',
}
function findname(){

}
document.write(typeof findname);
document.write("<br>")

document.write("<br>")
document.write("<h1>Add html tags in javasrcipt</h1>")
document.write("<br>")


document.write("How are you <br>")
document.write("<b>How are you</b>")
document.write("<br>")

document.write("<u>How are you</u>")
// LOOPS
document.write("<h1>JAVASRCIPT LOOPS</h1>")
for (let i = 0; i < 10; i++)
{
    document.write("for loop  <br>")
}

document.write("<h3>While loop</h3>")
i = 0;
while(i < 10){
    document.write("while loop <br>")
i++;
}
document.write("<h3> do While loop</h3>")
let j = 0;
do{
    j++
    document.write("do while loop <br>")

}
while(j < 10)

document.write("<h3>for in</h3>")

let fruite = {
    name : "apple",
    color : "red"
};

for(let key in fruite){
    document.write(key, fruite[key]);
}

document.write("<h3>for of</h3>")
let names = ["aiman","kainat","arooj"];
for(let index in names)
{
    document.write(index, names[index])
}
for(let name of names){
    document.write("name")
}



