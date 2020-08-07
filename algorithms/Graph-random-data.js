// function to get data to build a graph
//
function graphRandomData(vertices, edges) {

	let n1, n2
	let res
	
	res = `${vertices}\n`
	res = `${res} ${edges}\n`
	let x = 0
	while (x < edges) {
		n1 = Math.floor(Math.random() * vertices)
		do 
			n2 = Math.floor(Math.random() * vertices)
		while (n1 == n2)

		//avoid repeated edges
		if (res.indexOf(`\n${n1} ${n2}\n`) == -1 && res.indexOf(`\n${n2} ${n1}\n`) == -1) {
			res = `${res}${n1} ${n2}\n`
			x++
		}
	}
	return res
}


exports.graphRandomData = graphRandomData

