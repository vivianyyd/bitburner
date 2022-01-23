/** 
 * @param {NS} ns 
 * Work in progress. Deletes all files in children, then does the same in children.
**/
export async function main(ns) {
	var children = ns.scan();
	var me = ns.args[0]
	var parent = ns.args[1];
	for (var i = 0; i < children.length; i++) {
		if (children[i] == parent) continue;
		var files = ns.ls(children[i]);
		for (var j = 0; j < files.length; j++) {
			if (files[j] != 'rmall.js') { ns.rm(files[j]); }
		}
		await ns.scp('rmall.js', children[i]);
		ns.exec('rmall.js', children[i], 1, children[i], me);
	}
}
