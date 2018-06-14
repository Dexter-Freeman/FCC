// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
//   const lowerCase = title.toLowerCase();
//   const arr = lowerCase.split(/\W/g).filter(word => word !== "");
//   return arr.join("-");
return title.toLowerCase().split(/\W/g).filter(word => word !== "").join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
document.write(winterComing);