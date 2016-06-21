function Node(data){
  this.data = data;
  this.next = null;
  this.previous = null;
}

function DoublyList(){
  this._length = 0;
  this.head = null;
  this.tail = null;
}

DoublyList.prototype.add = function(value){ //attach to prototype
  var node = new Node(value); //constructor

  if (this._length > 0){
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;

  } else {
    this.head = node;
    this.tail = node;
  }
  this._length++;
  return node;

}

DoublyList.prototype.searchNodeAt = function(position){
  var count = 1,
      currentNode = this.head,
      message = {failure:"Failure: non-existent node in list"};

  if (this._length === 0 || this._length < position || position < 1){
    throw new Error(message.failure);
  }

  while (count < position){
      currentNode = currentNode.next;
      count++;
  }
  return currentNode.data;
}

DoublyList.prototype.removeAt = function(position){
  var message = {failure: "Failure: non-existent node in list",
                 success: "Node removed"},
      currentNode = this.head;
  if (this._length === 0 || this._length < position || position < 1){
    throw new Error(message.failure);
  }
  if (position === 1){
    this.head = currentNode.next;
    if (this.head){
      this.head.previous = null;
    } else {
      this.tail = null;
    }
  }
  else if (position === this._length){
    this.tail = this.tail.previous;
    this.tail.next = null
  } else {
    while (count < position) { //find node that we want to remove
        currentNode = currentNode.next;
        count++;
    }
    var prevPod = currentNode.previous;
    var afterPod = currentNode.next;
    prevPod.next = afterPod;
    afterPod.previous = prevPod;
  }
  this._length--; //Decrement length
  return message.success;

}
