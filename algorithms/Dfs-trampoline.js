const t = require('./Tco')

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
		t.trampoline(this._dfs([], vertex))
    }

	this._dfs = function (path, vertex)  {
        if (!this.marked[vertex])
            this.count++
        this.marked[vertex] = true
		let found = null
        for (let ind of this.graph.adj[vertex]) {
            if (!this.marked[ind]) {
				found = ind
				path.push(vertex)
				break
			}
        }
		if (found == null) {
			if (path.length > 0)
				found = path.pop()
			else 
				return true

		}
        return () => this._dfs(path, found)
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
