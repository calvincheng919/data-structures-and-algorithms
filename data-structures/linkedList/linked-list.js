'use strict';

// Linked List Data Structure

// Within your LinkedList class, include a head property. 

// Upon instantiation, an empty Linked List should be created.

// This object should be aware of a default empty value assigned to head when the linked list is instantiated.

// Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

// Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

// Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.

// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

// Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

class Node {
  constructor(data){
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = {value: null};
    this.nodeArray = [];
  }
  insert(data){
    let node = new Node();
    node.value = data; //assign value of new node to data
    node.next = this.head; //change value of new node's next to the head
    this.head = node; //make the linked list head the new node
    return this.head.value; //return the value of the head (which is now the new node)
  }
  includes(){

  }
  print(){

  }

}

let linkedlist1 = new LinkedList();

linkedlist1.insert('first data');
linkedlist1.insert('second data');
linkedlist1.insert('third data');
linkedlist1.insert('fourth data');

console.log(linkedlist1.nodeArray);
