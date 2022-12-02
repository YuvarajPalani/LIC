const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const value = [{a:'abc',c:'fge'},{e:'cde',c:'fge'}];

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// function fun1(req, res){
//     return req.get('http://localhost:3000')
//    .catch((err) =>{
//        console.log('found error');
//   }).then((res) =>{
//      console.log('get request returned.');
//   });
// }   
app.get('/test1',getall)
app.post('/test8',postname)
app.get('/test9',ffff)



function getall(req, res){
    res.send(value);
  const wd = getWildAnimal();
}
function postname(req, res, next) {
    console.log(req.body);
    value.push(req.body);
    res.json(req.body);
  };

  function ffff(req,res){
    const num1 = value.filter(num => num.c ==='fge');
    res.send(num1);
    console.log(num1);
}
 