'use strict';

const { businessTrip, Graph } = require('../graph-business-trip');

describe('Business Trip', () => {
    const myGraph = new Graph();
    myGraph.addNode('Pandora');
    myGraph.addNode('Arendelle');
    myGraph.addNode('Metroville');
    myGraph.addNode('Monstroplolis');
    myGraph.addNode('Narnia');
    myGraph.addNode('Naboo');
    myGraph.addEdge('Pandora', 'Arendelle', 150);
    myGraph.addEdge('Arendelle', 'Pandora', 150);
    myGraph.addEdge('Pandora', 'Metroville', 82);
    myGraph.addEdge('Metroville', 'Pandora', 82);
    myGraph.addEdge('Arendelle', 'Metroville', 99);
    myGraph.addEdge('Metroville', 'Arendelle', 99);
    myGraph.addEdge('Arendelle', 'Monstroplolis', 42);
    myGraph.addEdge('Monstroplolis', 'Arendelle', 42);
    myGraph.addEdge('Metroville', 'Narnia', 37);
    myGraph.addEdge('Narnia', 'Metroville', 37);
    myGraph.addEdge('Metroville', 'Naboo', 26);
    myGraph.addEdge('Naboo', 'Metroville', 26);
    myGraph.addEdge('Metroville', 'Monstroplolis', 105);
    myGraph.addEdge('Monstroplolis', 'Metroville', 105);
    myGraph.addEdge('Monstroplolis', 'Naboo', 73);
    myGraph.addEdge('Naboo', 'Monstroplolis', 73);
    myGraph.addEdge('Narnia', 'Naboo', 250);
    myGraph.addEdge('Naboo', 'Narnia', 250);

    const arr1 = ['Metroville', 'Pandora'];
    const arr2 = ['Arendelle', 'Monstroplolis', 'Naboo']
    const arr3 = ['Naboo', 'Pandora']
    const arr4 = ['Narnia', 'Arendelle', 'Naboo']
    const arr5 = ['Amman', 'Arendelle', 'Naboo']
    const arr6 = ['Irbid', 'Arendelle', 'Naboo']
    it('should return a valid cost for true paths', () => {
        expect(businessTrip(myGraph, arr1)[0]).toBeTruthy();
        expect(businessTrip(myGraph, arr1)[1]).toEqual(82);
        expect(businessTrip(myGraph, arr2)[0]).toBeTruthy();
        expect(businessTrip(myGraph, arr2)[1]).toEqual(42);
    });
    it('should return false for non continuos trip paths', () => {
        expect(businessTrip(myGraph, arr3)[0]).toBeFalsy();
        expect(businessTrip(myGraph, arr3)[1]).toEqual(0);
        expect(businessTrip(myGraph, arr4)[0]).toBeFalsy();
        expect(businessTrip(myGraph, arr4)[1]).toEqual(0);
    });
    it('return false for non existed starts', () => {
        expect(businessTrip(myGraph, arr5)[0]).toBeFalsy();
        expect(businessTrip(myGraph, arr5)[1]).toEqual(0);
        expect(businessTrip(myGraph, arr6)[0]).toBeFalsy();
        expect(businessTrip(myGraph, arr6)[1]).toEqual(0);
        
    });
});