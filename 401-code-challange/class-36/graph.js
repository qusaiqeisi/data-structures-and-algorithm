const Vertex = require('./vertex');
const Edge = require('./edge');
const Queue = require('./Queue');

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

    BFS(node) {
        // Create a Queue and add our initial node in it
        let q = new Queue(this.nodes.length);
        let explored = new Set();
        q.enqueue(node);
     
        // Mark the first node as explored explored.
        add(node);
     
        // We'll continue till our queue gets empty
        while (!q.isEmpty()) {
           let t = q.dequeue();
     
           // Log every element that comes out of the Queue
           console.log(t);
     
           // 1. In the edges object, we search for nodes this node is directly connected to.
           // 2. We filter out the nodes that have already been explored.
           // 3. Then we mark each unexplored node as explored and add it to the queue.
           this.edges[t]
           .filter(n => !explored.has(n))
           .forEach(n => {
              explored.add(n);
              q.enqueue(n);
           });
        }
     }
  }
  

  let g = new Graph();
  g.addNode("A");
  g.addNode("B");
  g.addNode("C");
  g.addNode("D");
  g.addNode("E");
  g.addNode("F");
  g.addNode("G");
  
  g.addEdge("A", "C");
  g.addEdge("A", "B");
  g.addEdge("A", "D");
  g.addEdge("D", "E");
  g.addEdge("E", "F");
  g.addEdge("B", "G");
  
  g.BFS("A");
