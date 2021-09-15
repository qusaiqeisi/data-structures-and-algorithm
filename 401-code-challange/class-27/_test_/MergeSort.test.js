'use strict';

let mergeSort = require('../MergeSort');


describe('mergeSort function()', () => {
  it('mergeSort()', () => {
    let array=[4, 8, 7, 2, 11, 1, 3];
    expect(mergeSort(array)).toEqual([ 1, 2,  3, 4 , 7, 8, 11]);
  });



});