const gf = require('./algorithms/Graph-file')
const d = require('./algorithms/Dfs')

// node 3exercise.js tinyG.txt 0   		// not connected
// node 3exercise.js tinyCG.txt 4  		// connected
// node 3exercise.js mediumG.txt  102 	// connected
// node 3exercise.js largeG.txt 102 	// RangeError: Maximum call stack size exceeded ***********
//		https://stackoverflow.com/questions/20936486/node-js-maximum-call-stack-size-exceeded
//
/////////////////////////////////////////////////////////////////

let fileName = process.argv.slice(2,3)
let vertex = process.argv.slice(3)

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

