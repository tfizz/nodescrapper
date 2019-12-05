const Scrapper = require('../controller/Scrapper');

module.exports = (app)=>{

    app.get('/',async(req,res)=>{
        var data = await Scrapper.init();
        var result = Scrapper.prepareData(data).movies;
        res.json(result);
    });
}