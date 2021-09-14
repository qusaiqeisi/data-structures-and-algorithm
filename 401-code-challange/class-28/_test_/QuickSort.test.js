'use strict';

const quickSort = require ('../QuickSort');

describe('quickSort function()', () => {

    it('quickSort()', () => {
      let array=[5, 2, 4, 6, 1, 3];
      expect(quickSort(array)).toEqual([ 1, 2, 3, 4, 5, 6 ]);
    });

    // it('insertionSort()', () => {
    //   let array=[11, 15, 12, 10, -2];
    //   expect(insertionSort(array)).toEqual([-2, 10, 11, 12, 15]);
    // });
  });