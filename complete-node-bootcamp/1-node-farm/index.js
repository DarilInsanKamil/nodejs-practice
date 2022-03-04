const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemp = require('./starter/module.js/replaceTemplate')
//////////////////
//SERVER


//Create NODE FARM
// Function for replace HTML


// call html file
const tempOverview = fs.readFileSync(`./starter/templates/overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`./starter/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`./starter/templates/product.html`, 'utf-8')

//Call JSON file for API
const data = fs.readFileSync(`./starter/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

//create server
const server = http.createServer((req, res) => {

    //Destructure query and pathname from ulr parse
    const { query, pathname } = url.parse(req.url, true)

    //Route for Overview 
    if (pathname === '/' || pathname === "/overview") {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const cardHtml = dataObj.map(el => replaceTemp(tempCard, el)).join()
        const output = tempOverview.replace('{%PRODUCTCARDS%}', cardHtml)
        res.end(output)
        //Route for detail Product    
    } else if (pathname === "/product") {
        //response header for a request product
        res.writeHead(200, { 'Content-type': 'text/html' });
        //call obj id
        const product = dataObj[query.id]
        const output = replaceTemp(tempProduct, product)
        res.end(output)
        //Route for call API
    } else if (pathname === "/api") {
        //response header for a request url api
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(data)
    } else {
        //response header for a request url
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>404 || Page Not Found</h1>')
    }
})

//listener server or response for a request
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening for the request on port 8000')
})



//Blocking synchronus way

// const res = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
// console.info(res)
// const write = `this is what we know about avocado: ${res}.\nCreated on ${Date.now()}`

// fs.writeFileSync('./starter/txt/input.txt', write)

// console.log('File Written')

//Non-block asynchronus way
//Callback Hell

//read start.txt
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) => {
//     //readfile read-this.txt dengan start.txt content
//     if(err) return console.log('ERROR')
//     fs.readFile(`./starter/txt/${data}.txt`, 'utf-8', (err, data1) => {
//         console.info(data1)
//         //readfile append.txt
//         fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data2) => {
//             console.info(data2)
//             //combine read-this.txt and append.txt
//             fs.writeFile('./starter/txt/final.txt', `${data1}\n${data2}`, 'utf-8', err => {
//                 console.log('Your file has been written')
//             })
//         })
//     })
// })
