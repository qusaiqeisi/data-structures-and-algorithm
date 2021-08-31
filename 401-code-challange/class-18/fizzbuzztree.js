'use strict';

 const BinaryTree = require('./BinaryTree');
const Node = require('./node');

let fizzBuzz=(tree)=>{

    if(!tree)return null 
    let current=tree.root;
    console.log(current);
    let result=[]
    let trevers=(node)=>{
        if(node.value%3==0 && node.value%5 ==0) {
            node.value='fizzBuzz'
            result.push(node.value)
        }
       else if((node.value%3) ==0 ){
            node.value='fizz'
            result.push(node.value)
        }
       else if((node.value&5)==0){
            node.value='buzz'
            result.push(node.value)
        }
        else{
            result.push(node.value.toString())
        }
        if(node.left) trevers(node.left)
        if(node.right)trevers(node.right)
    }
        trevers(current)
    return result
}
// let tree = new BinaryTree;

// // tree.add(10);
// // tree.add(5);
// // tree.add(15);
// // tree.add(2);
// // tree.add(4);
// // tree.add(11);

const one = new Node(10);
  const two = new Node(5);
  const three = new Node(15);
  const four = new Node(2);
  const five = new Node(4);
  const six = new Node(11);
  const seven = new Node(15);
  const eight = new Node(21);
  const nine = new Node(30);

  const tree = new BinaryTree(one);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  two.left = six;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;

console.log(fizzBuzz(tree))
module.exports = fizzBuzz;


// let FizzBuxx = (tree) => {

//     let current = tree.value;
//     let list = [];

//     while (current.value !== null) {
//         if ((current.value % 3 === 0) && (current.value % 5 === 0)) {
//             current.value = 'fizzBuzz';
//             list.push(current.value)
//         } else
//             if (current.value % 3) {
//                 current.vale = 'fizz'
//                 list.push(current);
//             } else
//                 if (current.value % 5 === 0) {
//                     current.value = 'buzz';
//                     list.push(current);
//                 }
//     }
//     return list;

// }

