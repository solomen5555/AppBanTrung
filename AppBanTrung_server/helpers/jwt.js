const expressJwt = require('express-jwt');

function authJwt(){
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked:isRevoked
    }).unless({
        path:[
            {url:/\/public\/uploads(.*)/,method:['GET','OPTIONS'] } ,
           {url:/\/trungtinhyeu\/api\/products(.*)/,method:['GET','OPTIONS'] } ,
           {url:/\/trungtinhyeu\/api\/categories(.*)/,method:['GET','OPTIONS'] } ,
           {url:/\/trungtinhyeu\/api\/users(.*)/,method:['GET','OPTIONS',"PUT"] } ,
           {url:/\/trungtinhyeu\/api\/orders(.*)/,method:['GET','OPTIONS',"PUT","POST","DELETE"] } ,
           `${api}/users/login`,
           `${api}/users/register`,
           `${api}/users`,
        ]
    })
}

async function isRevoked(req,payload,done){
    if(!payload.isAdmin){
        done(null,true)
    }
    done();
}

module.exports = authJwt;