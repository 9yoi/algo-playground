/*
DFS: When visiting node B from node A, go through all of B's neighbours before A
  - if node is null, return
  - visit node
  - set visit node to true
  - iterate root edges 
    - if node has not been visited, recurse

*/

//DFS
var visited = {};

function dfs(graph, root) { 
  if (!graph[root]) {
    return;
  }
  console.log(root);
  visited[root] = true;
  for (var node in graph[root].edges) {
    if (!visited[node]) {
      dfs(graph, node);
    }
  }
}

/*
BFS: Visits all of A's neighbours first before going to B
USE A QUEUE!

- add root to queue
- while queue is not empty
  - dequeue first item
    - add item's edges to queue
    - visit item
      - if item has not been visited, visit
      - mark as visited
*/

//BFS
function bfs (graph, root) {
  var queue = [];
  var visited = {};
  queue.push(root);
  while (queue.length > 0) {
    var item = queue.shift();
    if (!visited[item]) {
      visited[item] = true;
      console.log(item);
      for (var node in graph[item].edges) {
        queue.push(node);
      }
    }
  }
}

// example graph
var graph = 
{ '1': { edges: { '2': 2, '3': 3 } },
  '2': { edges: { '1': 1, '4': 4 } },
  '3': { edges: { '1': 1 } },
  '4': { edges: { '2': 2 } } }

dfs(graph, 1);
bfs(graph, 1);
