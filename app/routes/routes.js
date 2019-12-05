module.exports = (app)=>{

    app.get('/',(req,res)=>{
        var obj = {};
        obj["message"] = "Hello World";
        res.json(obj);
    });
}