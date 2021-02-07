const axios = require('axios');

exports.sendOTP = async (generatedOTP, phone) => {
  // let url = `https://api.msg91.com/api/v5/otp?authkey=${process.env.AUTH_KEY}&template_id=${process.env.TEMPLATE_ID}&mobile=${Number.parseInt(91 + phone)}&otp=${generatedOTP}`;
  let url = `https://api.msg91.com/api/sendhttp.php?route=4&sender=TESTIN&mobiles=${Number.parseInt(91 + phone)}&authkey=${process.env.AUTH_KEY}&message=Your otp is ${generatedOTP}`;
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
};
