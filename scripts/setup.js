/** 
 * @param {NS} ns 
 * Breaks into child servers and initates setup process in them.
 * Initiates the weaken-grow-hack loop in the current server.
**/
export async function main(ns) {
	var name = ns.args[0];
	var parent = ns.args[1];
	var children = ns.scan(name);
	for (var i = 0; i < children.length; i++) {
		var child = children[i];
		if (child == parent) { continue; }

		ns.tprint('Setting up: ', child);
		ns.brutessh(child);
		ns.ftpcrack(child);
		// automate backdoor if it ever takes less than 32G
		try {
			ns.nuke(child);
			await ns.scp(['setup.js', 'loop.js', 'adv.js', 'simp.js', 'remote.js'], child);
			ns.killall(child);
			
			var small = ns.getScriptRam('setup.js') > ns.getServerMaxRam(child);
			ns.exec('setup.js', small ? name : child, 1, child, name);
		} catch (error) {
			ns.tprint('Not enough ports to nuke: ', child);  // not enough ports
		}
	}
	ns.exec('loop.js', name, 1, name);
}
