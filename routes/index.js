const express = require('express');
const router = express.Router();
const request = require('request');

let uid = 'User';
let collegeId = 0;
//let center = "XYZ";
let centers = [
  {name: "A", id: "A", seatsAvailable: 1, isFilled: false},
  {name: "B", id: "B", seatsAvailable: 2, isFilled: false},
  {name: "C", id: "C", seatsAvailable: 3, isFilled: false}
];
let registeredCandidates = [
  {name: "X1", collegeId: 1, center: null},
  {name: "Y1", collegeId: 1, center: null},
  {name: "Z1", collegeId: 1, center: null},
  {name: "X2", collegeId: 2, center: null},
  {name: "Y2", collegeId: 2, center: null},
  {name: "Z2", collegeId: 2, center: null}
];

function getCenter(name, collegeId){
  // Logic to allocate center

for(i = 0;i < centers.length; i++){
  if(centers[i].isFilled != false)
      continue;
  else {
    var center = centers[i].name;
    centers[i].seatsAvailable -= 1;
    if(centers[i].seatsAvailable == 0)
      centers[i].isFilled = true;
    return center;
  }
}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', user: uid});
});

router.post('/', function (request, response) {
  console.log(request.body);
  uid = request.body.uid;
  collegeId = request.body.collegeId;
  response.render('result', { title: 'Result', user: uid, center: getCenter(uid, collegeId)});
});

module.exports = router;
