const g = require('./Graph')


// Create a graph object from data
//
function graph_load(content) {
  	lines = content.split("\n")	
  	let c = new g.graph(lines[0])
 	edges = lines.slice(2)
  	for (line of edges) {
		[v1, v2] = line.split(" ")
	  	if (v1.length > 0 && v2.length > 0) 
  			c.addEdge(v1, v2)
 	}
	return c
}

exports.graph_load = graph_load
