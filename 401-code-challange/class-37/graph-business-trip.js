'use strict';

const { Graph } = require('./graph');

function businessTrip(graph, arr) {
    let totalCost = 0;
    if (graph.map.has(arr[0])) {
        let adjacents = graph.getAdjacent(arr[0]);
        for (let i = 1; i < arr.length; arr++) {
            let flag = false;
            for(let {node,weight} of adjacents){
                if(node == arr[i]){
                    flag=true;
                    totalCost+=weight
                    break;
                }
            }
            if(!flag){
                return [false,0];
            }
        }
    }else{
        return [false, 0];
    }
    return [true,totalCost];
}
module.exports ={Graph, businessTrip}