const gf = require('./algorithms/Graph-file')
const d = require('./algorithms/Dfp')

// node 6exercise.js filename.txt vertex_from vertex_to
//
/////////////////////////////////////////////////////////////////

let fileName = process.argv.slice(2,3)
let from = process.argv.slice(3,4)[0]
let to = process.argv.slice(4)[0]

async function run(fileName, vertex, vertexTo) {
	let graph = await gf.load_graph(fileName)
	let dfp = new d.DepthFirstPath(graph)
	dfp.dfs(vertex)


	console.log("Vertices: "+graph.V)
	console.log(`Connected vertices with vertex ${vertex}: ${dfp.counted()} vertices`)
	pathTo = dfp.pathTo(vertexTo)
	console.log("Path length: "+pathTo.length)
	if (pathTo.length < 10) {
		console.log(`Path: ${pathTo}`)
	} else {
		console.log(`Path: ${pathTo.slice(0,9)}...`)
	}
	console.log("Is graph connected? "+dfp.isGraphConnected())

}

run(fileName, from, to)

