function Node(value){
  this.value = value;
  this.children = [];
}

function DFS(value, Node){
  while (Node){
    if (Node.value === value){
      return Node;
    }
    for (var i = 0; i < Node.children.length; i++){
      DFS(Node.children[i]);
    }
  }
}
