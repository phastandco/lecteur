import Koa from 'koa'
import {extname, resolve} from 'path'
import {createReadStream, stat} from 'fs'
import {promisify} from 'util'
//import jwt from 'koa-jwt'

// localhost:3000/api/onepiece?video=D:/1P%20ep/one%20piece%1
const app = new Koa()

app.use(({request, response}, next) => {
    if (
        !request.url.startsWith('/api/onepiece') ||
        !request.query.video
        //à revoir
        //|| !request.query.video.match(/^[a-z0-9-_]+\.(mp4)$/i)
    ) {
        console.log("On est pas bons : ", request.url)
        response.redirect('https://ianime-fr.com/voir-one-piece-episode-1-vostfr/')
        return
    }
    return next()
})

/*
app.use(jwt ({
secret : 'une_piece',
algorythme : ['HSA256', 'HS512'],
getToken : ({request}) => request.query.token,
}))
*/

app.use(async ({request, response, state}, next) => {
    //on check que l'url est bien
    //infos du token JWT
    console.log("Etat : ", state.user)
    const video = resolve("D:/1P ep", request.query.video)

    if (!range) {
        response.type = extname(video)
        response.body = createReadStream(video)
        console.log("No Range")
        return next()
    }

    const parts = range.replace('bytes=', '').split('-')
    console.log("Parties : ", parts)
    const videoStat = await promisify(stat)(video)
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10) : videoStat.size -1

    console.log("Start : ", start)
    console.log("End : ", end)

    //ajouter une entête
    response.set('Content-Range', `bytes ${start}-${end}/${videoStat.size}`)
    response.set('Accept-Ranges', `bytes`)
    response.set('Content-Length', end - start + 1)
    response.status = 206
    response.body = createReadStream(video, {start, end})
})

app.on('error', (err) => {
    console.log("Navigateur ferme la connexion mais Koajs veut quand même lire le contenu donc pas très grave puisque cela fonctionne anyway.")
})

app.listen(3000)

//JWT pour ne pas avoir à savoir si le seveur peut envoyer les vidéos (ça c'est le boulot d'un autre seveur qui se connecte à la bdd)
//en fait non car bdd au même endroit que le back lol

//40aeaef266d814830ee3e69b33f9966cca0d83d7

//url https://ianime-fr.com/voir-one-piece-episode-[NUMBER]-vostfr/