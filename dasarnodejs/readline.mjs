import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("siapa nama anda? ", (name) => {
    console.info(`Hello ${name}`)
    input.close()
})