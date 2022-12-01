var express = require("express");
var router = express.Router();
let axios = require("axios");

/* GET home page. */
router.post("/sendMessage", async function (req, res, next) {
  
  try {
    let response;
    let header = {
      Authorization: `Bearer EAARZCpBgvKL8BADayEpk8VIqvxkSyGTPw1Oa4I6rRaZC7T5odoXqP2xD66KF3uztRLBi8K9xSiNSApuisszsrSvIPVZBK7XQHozWo968xQieEwHDeZCT3CAqZC93Y5JpKm7iLKMnDvULaaOsmnSRLbPxN4KUWhP1XvuVrwQHwo7TalqlKqCz6hdACDKnZAogEZBqg4IExs2ZBwZDZD`
    }
    try {
      let Data = req.body;
      response = await axios.post(`https://graph.facebook.com/v15.0/106111979006276/messages`,Data,{ headers: header } );
    } catch (error) {
      throw error;
    }
    res.send({
      message: "success",
      data: response.data,
    });

  } catch (error) {
    res.send(error);
  }

  

  //res.render('index', { title: 'Express' });
});

module.exports = router;
