'use strict';

const Node = require('node/index.js'); //don't need index... implicit in index.js

class BinarySearchTree {
  constructor(node) {
    this.root = node;
  }

  preOrder(){

  }

  inOrder(){
    let resuilts = [];

    let _walk = (node) => { 
      //L Ro R

      //Left
      if(node.left) _walk(node.left);

      //Ro
      results.push(node.value);

      //Right
      if(node.rigth) _walk(node.right);
     }

     _walk(this.root);

    return resuilts;
  }

  add(node){
    if(!this.root){
      this.root = node;
      return node;
    }
    let currentNode = this.root;

    while(currentNode){

      if(node.value < currentNode.value) {
        if(!currentNode.left){
          currentNode.left = node;
          break;
        }else{
          currentNode = currentNode.left;
        }
      }else if(node.value > currentNode.value){
        if (!currentNode.right){
          currentNode.right = node;
          break;
        }else {
          currentNode = currentNode.right;
        }
      }else{
        throw new Error('value already exits in binary search tree');
      }
    }

}

module.exports = BinarySearchTree;

