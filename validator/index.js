exports.createPostValidators = (req, res, next) => {
  // title
  req.check("title", "Write a title").notEmpty()
  req.check("title", "title must be in between 4 to 200 letters").isLength({
    min: 4, max: 200
  })
  // body
  req.check("body", "Write a body").notEmpty()
  req.check("body", "body must be in between 4 to 2000 letters").isLength({
    min: 4, max: 2000
  });

  // checck for the errors
  const errors = req.validationErrors();
  //if errors show the first one
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({
      error: firstError
    })
  }

  // proceed to nex middleware
  next();
}