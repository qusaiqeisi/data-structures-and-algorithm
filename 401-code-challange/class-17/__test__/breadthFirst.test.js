'use strict'
const Node =require('../node')
const BinaryTree = require("../BinaryTree");
const breadthFirst=require('../Breadthtree')

let one = new Node(2);
        let two = new Node(7);
        let three = new Node(5);
        let four = new Node(2);
        let five = new Node(6);
        let six = new Node(9);
        let seven = new Node(5);
        let eight = new Node(11);
        let nine = new Node(4);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        five.left=seven
        five.right=eight
        three.right = six;
        six.left = nine;

       let tree = new BinaryTree(one);


       describe('Binary Tree', ()=>{ 

         it ('breadthFirst()' ,()=>{
                let result=[2,7,5,2,6,9,5,11,4]
                let tree2=new BinaryTree()
                
                expect(breadthFirst(tree)).toEqual(result)
                expect(tree2.root).toBeNull()
                expect(breadthFirst(tree2)).toBe('Tree is empty!')

         })

       })