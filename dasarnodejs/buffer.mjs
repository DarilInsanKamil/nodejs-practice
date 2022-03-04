// import { Buffer } from 'buffer'

// const buffer = Buffer.from('Daril Insan Kamil', "utf8");

// console.info(buffer.toString())
// console.info(buffer.toString("hex"))
// console.info(buffer.toString("base64"))

// const buffer64 = Buffer.from('RGFyaWwgSW5zYW4gS2FtaWw=', "base64");

// console.info(buffer.toString('utf8'))

import fs from 'fs'
var imageAsBase64 = fs.readFileSync('./tempos.png', 'base64');

console.info(imageAsBase64)