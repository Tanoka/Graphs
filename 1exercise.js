const  g = require('./algorithms/Graph')

c = new g.graph(5)
c.addEdge(0,1)
c.addEdge(0,2)
c.addEdge(1,1)
c.addEdge(1,2)
c.addEdge(1,4)
c.addEdge(1,3)
c.addEdge(2,3)
c.addEdge(4,3)
c.addEdge(3,4)
console.log("Max degree " + c.maxDegree())
console.log("Average degree " + c.avgDegree())
console.log(`degree of vertex 2: ${c.degree(2)}`)
console.log(`0 and 4 are adjacent?: ${c.areAdjacent(0,4)}`)
console.log(`2 and 3 are adjacent?: ${c.areAdjacent(2,3)}`)
console.log(`1 is self-loop?: ${c.areAdjacent(1,1)}`)
console.log(`3 is self-loop?: ${c.areAdjacent(3,3)}`)
console.log(c.toString())

/*
Max degree 6
Average degree 3.6
degree of vertex 2: 3
5 vertices, 9 edges
0: 1 2
1: 0 1 1 2 4 3	// 1 1 quiere decir self-loops, pues es el vertice 1
2: 0 1 3
3: 1 2 4 4	// 4 4  quiere decir parallel edges
4: 1 3 3  	// 3 3 quiere decir parallel edges
*/
