'use strict';

const insertionSort = require ('../InsertionSort');

describe('insertionSort function()', () => {
    it('insertionSort()', () => {
      let array=[5, 3, 6, 1, 4];
      expect(insertionSort(array)).toEqual([1, 3, 4, 5, 6]);
    });


    it('insertionSort()', () => {
      let array=[11, 15, 12, 10, -2];
      expect(insertionSort(array)).toEqual([-2, 10, 11, 12, 15]);
    });
  
  
  
  });