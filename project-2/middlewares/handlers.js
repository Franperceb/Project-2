exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(err => {
  const {name, password, email} = req.body
let errors = []
if(!name  || !email || !password){
  errors.push({ msg: 'Please enter all fields'})
}
if(password < 6 ){
  errors.push({ msg: 'Please enter all fields'})
}
if (errors.length > 0) {
  res.render('auth/signup', {
    errors,
    name,
    email,
    password
  })
}


})
