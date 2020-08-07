const t = require('./Tco')

// Deep-first path
// This Graph client uses depth-first search to find paths to all the vertices in a graph that are connected
//		to a given start vertex s .
function DepthFirstPath(graph) {

	this.marked = []
	this.count = 0
	this.graph = graph

	this.edgeTo = []
	this.s

    for (x =0; x < graph.V; x++) {
		this.marked[x] = false
    }
    this.graphSize = graph.V

    this.dfs = function (vertex) {
		this.s = vertex
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
				this.edgeTo[ind] = vertex
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

	this.pathTo = function(v) {
		if (!this.hasPathTo(v)) return null;
		newPath = []
		for (let x = v; x != this.s; x = this.edgeTo[x])
			newPath.push(x)
		newPath.push(this.s)
		return newPath
	}

	this.isMarked = function (w) {
		return this.marked[w]
	}

    this.hasPathTo = this.isMarked

	this.counted = function () {	
		return this.count
	}

	this.isGraphConnected = function() {
		return this.counted() == this.graphSize
	}
}

exports.DepthFirstPath = DepthFirstPath
