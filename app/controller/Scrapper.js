const axios = require('axios');
const cheerio = require('cheerio');
const baseUrl = "https://www.imdb.com";
const url = `${ baseUrl }/chart/moviemeter/?ref_=nv_mv_mpm`;
const Movies = new Set();

exports.init = async()=>{
    var response = await axios.get(url);
    return cheerio.load(response.data);
};

exports.prepareData = (data)=>{
    try{
        data(".lister-list .titleColumn a").each((index,element)=>{
            var Movie = {};
            Movie["title"] = data(element).text();
            Movie["link"] = `${baseUrl}`+data(element).attr("href");
            Movies.add(Movie);
        });
    }
    catch(err){
        console.log(err);
    };

    return {
        movies: [...Movies].sort()
    };
};