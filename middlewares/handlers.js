exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(err=>{
  console.log(err)
 const {name ,email, password} = req.body 
let errors = []

if(err){
  errors.push(err.message)

}
console.log(errors)
if(!name  || !email || !password){
  errors.push({ message: 'Please enter all fields'})
}
if(password < 5 ){
  errors.push({ message: 'Please enter all fields'})
}
if (errors.length > 0) {
  res.render('auth/signup', {
    errors,
    name,
    email,
    password
  })
} else {
  User.findOne({ email: email })
  .then(user => {
    if (user) {
      errors.push({ message: 'Email already exists' });
      res.render('register', {
        errors,
        name,
        email,
        password
      })
    }
  })
}

})
