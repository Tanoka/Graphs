const l = require('./Graph-load')
const fsPromise = require('fs').promises


async function get_content(fileName) {
	if (fileName.length > 0) {
		// Get file content with promises instead of callback. UTF8 is needed to return a string, if not it return a buffer
		return await fsPromise.readFile(fileName[0], 'UTF8')
	}
}

async function load_graph(fileName) {
	data = await get_content(fileName)
	return l.graph_load(data)
}

exports.load_graph = load_graph
