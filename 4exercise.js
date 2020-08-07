const g = require('./algorithms/Graph-load')
const d = require('./algorithms/Dfs-trampoline')
const r = require('./algorithms/Graph-content-generator')


// node 4exercise.js 10 8  not connected never
// node 4exercise.js 10 10  conneted sometimes
// node 4exercise.js 10 20  almost always connected
// node 4exercise.js 100 200 sometimes connected
//
/////////////////////////////////////////////////////////////////

let vertices = parseInt(process.argv.slice(2)[0])
let edges = parseInt(process.argv.slice(3)[0])

function run(vertices, edges) {
	//load data
	let data = r.graphContentGenerator(vertices, edges)
	let graph = g.graph_load(data)
	let searcher = new d.DepthFirstSearch(graph)
	//search any vertex to see if graph is connected
	searcher.dfs(Math.floor(Math.random() * vertices))

	//checks
	console.log(graph.V)
	console.log(searcher.count)
	console.log("Counted:"+searcher.counted())
	console.log("Is graph connected? "+searcher.isGraphConnected())
}

run(vertices, edges)

