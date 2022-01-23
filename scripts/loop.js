/** 
 * @param {NS} ns 
 * Runs as many instances of adv as possible, with threading, on the machine [name], which must be the current machine.
 * If [name] has no money, the machine is to instead target 'phantasy'.
 * **/
export async function main(ns) {
	var name = ns.args[0];
	if (name != 'home' && ns.getServerMaxMoney(name) != 0) {
		var ram = ns.getServerMaxRam(name);
		var advR = ns.getScriptRam('adv.js');
		var simpR = ns.getScriptRam('simp.js');

		// only adv if possible
		var sets = Math.floor(ram / advR);
		if (sets == 0) {
			ns.spawn('simp.js', ram / simpR, name);
		}
		else {
			ns.spawn('adv.js', sets, name);
		}

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
	else if (name != 'home') {
		ns.tprint('Max money of ', name, ' was 0. Instead targeting phantasy');
		ns.spawn('remote.js', 1, name, 'phantasy');
	}
}
