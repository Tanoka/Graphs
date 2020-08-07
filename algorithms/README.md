**File descriptions**

file | description
-----|-------------------
Graph.js|Module to build a graph from a number to vertices and adding vertices pairs as edges. Builds a graph undirected, self-loop, parallel edges. Builda graph of Adjacency-list data structure type
Graph-load.js|Create graph structure from a string with first line as number of vertices, second line as number of edges and the rest of lines as pairs of vertices representing an edge connection.
Graph-file.js|Crete a graph structure from a file content. File access. Async/wait functions.
Dfs.js|Deep-first search algorithm to calculate if a graph is connected or not. Is a recursive implementation that launch error Maximum call stack size exceeded when the graph is too large.
Tco.js|Implementation of trampoline to execute tail call recursive functions when compiler/interpreter doesn't have tail call omptimization. This is useful to avoid stack size problem.
Dfs-trampoline.js|Implementation of dfs algorithm with trampoline optimization to manage large graphs.
Dfp.js|Deep-fisrt path. Algorithm that uses depth-first search to find paths to all the vertices in a graph that are connected to a given start vertex s. Uses trampoline optimization.
Graph-content-generator.js|Random data generator to build graphs.

