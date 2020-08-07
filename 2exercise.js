const gf = require('./algorithms/Graph-file')

let hrstart = process.hrtime();

function printData(graph, text) {
	console.log("Max degree " + graph.maxDegree())
	console.log("Average degree " + graph.avgDegree())

	hrend = process.hrtime(hrstart)
	console.info(text + ' execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}
let fileName = process.argv.slice(2)

/////////////////////////////////////////////////////////////////////////////////
// calling as async function
async function run(fileName) {
	let graph = await gf.load_graph(fileName)
	printData(graph, "Async call")
}

run(fileName)
// run(fileName)  //Tarda el doble, la unica parte asincrona es la carga del fichero, el resto es sincrono...


/////////////////////////////////////////////////////////////////////////////////
// Calling as promise
gf.load_graph(fileName).then(graph => {
	printData(graph, "Promise .then ")
})


//////////////////////END SCRIPT //////////////////////////////////////////////////
hrend = process.hrtime(hrstart)
console.info('reached end of script (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
