function Node(value){
  this.value = value;
  this.children = [];
}

function BFS(value, Node){ //takes in a value you are searching for and a Node
  var queue = [];
  var currentNode = Node;
  while (currentNode){
    for (var i = 0; i < currentNode.children.length; i++){//iterate through children
      if (currentNode.children[i].value === value){
        return currentNode.children[i];
      } else {
        queue.push(currentNode.children[i]);
      }
    }
    currentNode = queue.shift();
  }
}
