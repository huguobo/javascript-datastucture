function Node(value) = {
  this.value = value;
  this.next = null;
}

function SingleList() = {
  this._length = 0;
  this.head = null;
}

SingleList.prototype.add = function(value){ //add to back of list.
  var newNode = new Node(value);
  if (this._length > 0){
    var currentNode = this.head;
    currentNode.next? currentNode = currentNode.next : currentNode.next = newNode;
  } else {
    this.head = newNode;
    this._length++;
  }
  return newNode;
}

SingleList.prototype.remove = function(value){ //remove a value from linked list if it exists.
  var currentNode = this.head;
  var previousNode = this.head;
  var message = {failure: "Node not found", success: "Node removed"};
  while (currentNode){
    if (currentNode.value === value){
      if (currentNode === this.head){
        this.head = currentNode.next;
      } else {
        previousNode.next = currentNode.next;
      }
      this._length--;
      return message.success; //assuming every node in the LL is unique.
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  throw new Error(message.failure)
}
