function getColor() {
    var hexcode = "#" + Math.random().toString(16).slice(2, 8)
    return hexcode
  }

function changeColor()
{
    var hex = getColor();
    console.log(hex)
    document.getElementById("main").style.backgroundColor = hex
    document.getElementById("result").innerHTML = hex;
}