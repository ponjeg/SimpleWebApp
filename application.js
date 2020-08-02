var express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/test', (req, res) => {
    res.json({  return_string: cutString(req.body.string_to_cut || '') });
})

const cutString = (cut) => {
    var return_string = '';
    for (var i = 0; i < cut.length; i++){
        if (i % 3 === 2){
            return_string += cut.charAt(i);
        }
    }
    return return_string;
}

app.listen(3000,() => {})