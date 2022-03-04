import dns from 'dns/promises'

const address = await dns.lookup("darilmovgames.netlify.app")

console.info(address.address);
console.info(address.family);