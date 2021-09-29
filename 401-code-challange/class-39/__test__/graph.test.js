const  {printGraph,addEdge} = require('../graph');

describe("Given an adjacency matrix representation of a graph, return the adjacency list representation.", () => {

    it(" return the adjacency list representation", () => {
        let V = 5;
        let adj= [];
           
        for (let i = 0; i < V; i++)
            adj.push([]);

        addEdge(adj, 0, 1);
        addEdge(adj, 0, 4);
        addEdge(adj, 1, 2);
        addEdge(adj, 1, 3);
        addEdge(adj, 1, 4);
        addEdge(adj, 2, 3);
        addEdge(adj, 3, 4);
        expect(printGraph(adj)).toEqual("0 | 1 -> 4\n1 | 0 -> 2 -> 3 -> 4\n2 | 1 -> 3\n3 | 1 -> 2 -> 4\n4 | 0 -> 1 -> 3\n"
    );
    })
  

})