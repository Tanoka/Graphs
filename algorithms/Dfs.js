// Deep-first Search

function DepthFirstSearch(graph) {

	this.marked = []
	this.count = 0
	this.graph = graph

    for (x =0; x < graph.V; x++) {
            this.marked[x] = false
        }
    this.graphSize = graph.V

    this.dfs = function (vertex) {
        if (!this.marked[vertex])
            this.count++
        this.marked[vertex] = true
        for (let ind of this.graph.adj[vertex]) {
            if (!this.marked[ind]) 
                this.dfs(ind)
        }
    }

	this.isMarked = function (w) {
		return this.marked[w]
	}

	this.counted = function () {	
		return this.count
	}

	this.isGraphConnected = function() {
		return this.counted() == this.graphSize
	}
}

exports.DepthFirstSearch = DepthFirstSearch
