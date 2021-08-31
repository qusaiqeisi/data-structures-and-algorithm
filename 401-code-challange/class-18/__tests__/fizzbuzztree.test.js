'use strict';

const fizzBuzz = require('../fizzbuzztree');
const BinaryTree = require('../BinaryTree');
const Node=require('../node');


describe('Fizz Buzz Tree', () => {

  // create a new Binary Tree
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


  it('check function', () => {
    expect(fizzBuzz(tree)).toEqual(['buzz','5','11','fizzBuzz','fizz','fizzBuzz','fizzBuzz', 'buzz','4']);
  });

  it('check function', () => {
    expect(fizzBuzz()).toEqual(null);

  });
 

});



