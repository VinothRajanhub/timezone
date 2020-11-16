// exports.getcurrentTime = (req,res) => {
//     res.json(new Date());
//     next();
// }

exports.getcurrentTime = (req, res, next) => {
    return res.status(200).json({
        msg: new Date()
    })
  };