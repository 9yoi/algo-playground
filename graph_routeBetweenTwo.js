
// function hasProps (obj) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return true;
//     }
//   }
//   return false;
// }

// return true if there is a route between one directional graph
function findRoute (node, target) {
  // if root is null, return
  // visit node and check if target
    // if target, return true
  // iterate through edges and recurse
  // return false

  if (node == target) { 
    bool = true;
  }
  if (!graph[node]) {
    return;
  }
  for (var item in graph[node].edges) {
    findRoute(item, target);
  }
}

var graph = 
{ '1': { edges: { '2': 2, '3': 3 } },
  '2': { edges: { '4': 4 } },
  '3': { edges: { } },
  '4': { edges: { } } }

var bool = false
if (!findRoute('1', '5')) {
  console.log(bool)
} else {
  console.log(bool);
}
