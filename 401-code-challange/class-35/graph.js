const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
    constructor() {
      this._adjacencyList = new Map();
    }
    addVertex(vertex) {
      this._adjacencyList.set(vertex, []);
      return vertex;
    }
    addDirectedEdge(startVertex, endVertex) {
      if (
        !this._adjacencyList.has(startVertex) ||
        !this._adjacencyList.has(endVertex)
      ) {
        return "Invalid vertex";
      }
      const adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex));
    }
    printAll() {
      let str = "";
      for (const [vertex, edge] of this._adjacencyList.entries()) {
        let edg;
        if (edge[0]) {
          edg = "";
          for (let i = 0; i < edge.length; i++) {
            edg += `${edge[i].vertex.value},`;
          }
        } else {
          edg = edge;
        }
        str = str + ` Vertex ${vertex["value"]} => edge ${edg} ||`;
      }
      return str;
    }
    getNeighbors(node) {
      for (const [vertex, edge] of this._adjacencyList.entries()) {
        if (vertex === node) {
          return edge;
        }
      }
    }
    getGraphByNode(node) {
      if (this._adjacencyList.has(node)) {
        return this.printAll();
      }
    }
    size() {
      if (this._adjacencyList.size > 0) {
        return this._adjacencyList.size;
      } else {
        return null;
      }
    }
  }
  
  module.exports = { Graph, Vertex, Edge };




// const myGraph = new Graph();
// const zero = new Vertex(0);
// const one = new Vertex(1);
// const two = new Vertex(2);
// const three = new Vertex(3);
// const four = new Vertex(4);
// const five = new Vertex(5);

// myGraph.addVertex(zero);
// myGraph.addVertex(one);
// myGraph.addVertex(two);
// myGraph.addVertex(three);
// myGraph.addVertex(four);
// myGraph.addVertex(five);

// myGraph.addDirectedEdge(zero, two);
// myGraph.addDirectedEdge(two, four);
// myGraph.addDirectedEdge(two, three);
// myGraph.addDirectedEdge(four, five);
// myGraph.addDirectedEdge(one, three);
// myGraph.addDirectedEdge(five, three);

// console.log("------ neighbours of 2------")
// console.log(myGraph.getNeighbours(two));

// for (const [k, v] of myGraph.adjacencyList.entries()) {
//     console.log("k = ", k, " v =", v);
// }