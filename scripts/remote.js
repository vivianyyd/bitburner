/** @param {NS} ns **/
export async function main(ns) {
	var src = ns.args[0]
	var target = ns.args[1];
	var ram = ns.getServerMaxRam(src) - ns.getServerUsedRam(src) + ns.getScriptRam('remote.js');
	var advR = ns.getScriptRam('adv.js');
	var simpR = ns.getScriptRam('simp.js');

	// only adv if possible
	var sets = Math.floor(ram / advR);
	ns.spawn('adv.js', sets, target);

	// adv:simp  1:3
	// var sets = Math.floor(ram / (1 * advR + 3 * simpR));
	// if (sets == 0) {
	// 	ns.run('adv.js', 1, name);
	// 	ns.spawn('simp.js', (ram - advR) / simpR, name);
	// }
	// else {
	// 	ns.run('adv.js', 1 * sets, name);
	// 	ns.spawn('simp.js', 3 * sets, name);
	// }
}
