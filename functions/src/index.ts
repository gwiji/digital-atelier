import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app;

export const ssr = functions.https.onRequest(universal);

export const generateSitemap = functions.https.onRequest((req, res) => {
    let sitemap = '';
    sitemap = `https://digital-atelier.web.app/`;   
    console.log(sitemap)
    res.send(sitemap)
    
});