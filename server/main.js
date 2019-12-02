let OrientDB = require('orientjs')
const Koa = require('koa')
const app = new Koa()
app.use(require('koa-static')("PATH"))

app.use(async context => {
    context.body = data
})

let run = async function () {
    let dbserver = OrientDB({
        host: 'localhost',
        port: 2424,
        username: 'root',
        password: 'root',
    })

    app.listen(3000)
}

/*

Photos
Convert @rid to base64

localhost:3000/photos/:id
router.get('/photo/:id', async (context) {
    let id = Buffer.from(context.params.id, 'base64').toString('utf8')
    db.record.get(id)
})

*/
