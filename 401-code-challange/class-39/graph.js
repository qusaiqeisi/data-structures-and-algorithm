function addEdge(adj,u,v)
{
    adj[u].push(v);
    adj[v].push(u);
}
  
function printGraph(adj)
{
    let result =[];
    for (let i = 0; i < adj.length; i++) {
        result.push(i ,' | ' )
            for (let j = 0; j < adj[i].length; j++) {
               result.push(adj[i][j]," -> ")      
            }
        result.pop()
           result.push("\n")
        }
        return result.join('');
}
  

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
           console.log(printGraph(adj));
        
module.exports = {printGraph,addEdge}
  