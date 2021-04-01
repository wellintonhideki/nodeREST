module.exports = (app) => {

    app.get('/', (req, resp)=>{

        resp.statusCode = 200;
        resp.setHeader('Content-Type', 'text/html');
        resp.end('<h1> ola </h1>');
    
    });
};