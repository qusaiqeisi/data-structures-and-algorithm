'use strict';

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



  //finMax - challange16 and we find it bay the preorder
    // root - left - right

    findMax(){

        let maxValue;
        let traverse=(node)=>{
            if (maxValue){
                if (node.value >maxValue){
                    maxValue=node.value;
                }
            }else{
                maxValue=node.value;
            }

            if (node.left) {
                traverse(node.left);
              }

              if (node.right){
                  traverse(node.value);
              }

        }
        traverse(this.root);
        return maxValue;
    }
}

module.exports = BinaryTree;