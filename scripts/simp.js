/** @param {NS} ns **/
export async function main(ns) {
	var name = ns.args[0];
	while (true) {
		try { await ns.hack(name); }
		catch (error) { await ns.sleep(1000 * 60 * 60) }  // hack skill not high enough
	}
}
