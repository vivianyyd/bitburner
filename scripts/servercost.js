/** 
 * @param {NS} ns 
 * Prints the cost of purchasing a server with every option of RAM.
**/
export async function main(ns) {
	for (var i=0; i <= 20; i++){
		ns.tprint('RAM: ', Math.pow(2, i), '\tCost: ', ns.getPurchasedServerCost(Math.pow(2, i)));
	}
}
