'use strict';


let breadthFirst = (tree) => {

    if (!tree.root) return 'Tree is empty!'; //check if tree exists, if not escape

    let breadthQ = []; //declare array works as queue to add the tree's nodes to it
    let result = []; //declare output array

    breadthQ.push(tree.root); //push this.root into queue

    while (breadthQ.length > 0) { //loop while queue exists

        let frontNode = breadthQ.shift(); //pull off/remove  front (element at 0th idx) of queue put into temp var

        result.push(frontNode.value);

        if (frontNode.left) { //check for left child of the frontNode
            breadthQ.push(frontNode.left); //push into queue
        }
        if (frontNode.right) { //check for right child
            breadthQ.push(frontNode.right); //push into queue
        }
    }
    return result; //return output array
}


module.exports = breadthFirst;

