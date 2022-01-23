/** @param {NS} ns **/
export async function main(ns) {
	var ram = Math.pow(2, 13);
	var i = 0;
	while (i < ns.getPurchasedServerLimit()) {
		if (ns.getServerMoneyAvailable('home') > ns.getPurchasedServerCost(ram)) {
			var baby = ns.purchaseServer('home', ram);
			await ns.scp('remote.js', baby);
			ns.exec('remote.js', baby, 1, baby, 'phantasy');
			i++;
		}
		await ns.sleep(1000 * 60 * 60);
	}
}
