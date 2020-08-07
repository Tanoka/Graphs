// Graph: undirected, self-loop, parallel edges, 
// Adjacency-list data structure
function graph(v) 
{
	this.adj = [];
	this.V = v;// Total vertices number
	this.E = 0;// Total edges number

	for (let v = 0; v < this.V; v++)
		this.adj[v] = [];

	this.toString = function() {
		let s = this.V + " vertices, " + this.E + " edges\n";
		for (let v = 0; v < this.V; v++) {
			s += v + ": ";
			for (let w of this.adj[v])
				s += w + " ";

			s += "\n";
		}
	return s;
	}

	this.addEdge = function(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.E++;
	}
}

graph.prototype.degree = function(v) {
	let degree = 0;
	//ya, podria  hacer un count..
	for (let w of this.adj[v]) degree++;
	return degree;
}

graph.prototype.maxDegree = function() {
	let max = 0;
	for (let v = 0; v < this.V; v++)
		if (this.degree(v) > max)
			max = this.degree(v);
	return max;
}

graph.prototype.avgDegree = function() { 
	return 2 * this.E / this.V;
}

graph.prototype.areAdjacent = function(v1, v2) { 
	for (let v of this.adj[v1]) {
		if (v == v2) {
			return true
		}
	}
	return false
}

exports.graph = graph

