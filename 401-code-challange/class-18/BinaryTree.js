'use strict';

const Node = require('./node')

class BinaryTree {
    constructor(root=null) {
        this.root = root;
    }

    // root - left - right
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left - root - right
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left  - right - root
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    add(value){
        const newNode = new Node(value);
        let node = this.root;
        if ( node === null ) {
          this.root = newNode;
          return;
        }
    
        while(node !== null){
          if(node.value > value){
            if(node.left === null){
              node.left=newNode;
              return;
            }
            node = node.left;
          }else{
            if(node.right === null){
              node.right=newNode;
              return;
            }
            node =node.right;
          }
        }
      }
}

module.exports = BinaryTree;