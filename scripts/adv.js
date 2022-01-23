/** @param {NS} ns **/
export async function main(ns) {
	var name = ns.args[0];
	while (true) {
		if (ns.getServerSecurityLevel(name) > ns.getServerMinSecurityLevel(name) + 10)
			await ns.weaken(name);
		else if (ns.getServerMoneyAvailable(name) < ns.getServerMaxMoney(name) * 0.8)
			await ns.grow(name);
		else {
			try { await ns.hack(name); }
			catch (error) { await ns.sleep(1000 * 60 * 60) }  // hack skill not high enough
		}
	}
}
