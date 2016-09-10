//binarySearchTree.js

function binarySearchTree(){
    
    //定义节点node数据结构
    var node=function (key) {
    	 this.left=null;
    	 this.right=null;
    	 this.value=key; 
    }
    
    //初始化根
    var root=null;

   
    //实现插入一个新节点的方法insert
    this.insert=function (key) {
    	 var newnode=new node(key);
    	 if(root===null){
    	 	root=newnode;
    	 }
    	 else{
    	 	insertNode(root,newnode);
    	 }
    }
    var insertNode=function (node,newnode) {
    	 if(newnode.value<node.key){
    	 	if(node.left===null){
    	 		node.left=newnode;
    	 	}
    	 else{
    	 	insertNode(root.left,newnode);
    	   }
    	 }
    	 else {
    	 	if(node.right===null){
    	 		node.right=newnode;
    	 	}
    	 	else{
    	 	insertNode(root.right,newnode);
    	 	}
    	 }

    }
    
    //树的遍历
    
   
    //中序遍历
    this.inOrderTraverse=function (callback) {
    	 inOrderTraverseNode(root,callback);
    }
  
   var inOrderTraverseNode=function (node,callback) {
   	 if(node!==null){
        inOrderTraverseNode(node.left,callback);
   	 	callback(node.value);
   	 	inOrderTraverseNode(node.right,callback);
   	 }
   }

   
   //先序遍历
   this.preOrderTraverse=function (callback) {
   	    preOrderTraverseNode(root,callback);
   }
   var  preOrderTraverseNode=function (node,callback) {
   	  if(node!==null){
        callback(node.value);
        preOrderTraverseNode(node.left,callback);
   	 	preOrderTraverseNodee(node.right,callback);
   	 }
   }

   //后序遍历
   this.postOrderTraverse=function (callback) {
   	   postOrderTraverseNode(root,callback);
   }
    var  postOrderTraverseNode=function (node,callback) {
   	  if(node!==null){
        postOrderTraverseNode(node.left,callback);
   	 	postOrderTraverseNode(node.right,callback);
        callback(node.value);
   	 }
   }


}