const gf = require('./algorithms/Graph-file')
const d = require('./algorithms/Dfs-trampoline')

// node 5exercise.js tinyG.txt 0   		// not connected
// node 5exercise.js tinyCG.txt 4  		// connected
// node 5exercise.js mediumG.txt  102 	// connected
// node 5exercise.js largeG.txt 102 	
//
/////////////////////////////////////////////////////////////////

let fileName = process.argv.slice(2,3)
let vertex = process.argv.slice(3)[0]

async function run(fileName, vertex) {
	let graph = await gf.load_graph(fileName)
	let searcher = new d.DepthFirstSearch(graph)
	searcher.dfs(vertex)
	console.log(graph.V)
	console.log(searcher.count)
	console.log("Counted:"+searcher.counted())
	console.log("Is graph connected? "+searcher.isGraphConnected())
}

run(fileName, vertex)

