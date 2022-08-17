import User from "../models/user"


const index = (req, res, next) => {
  User.findAll()
  .then(users => {
    res.locals.data = users;
    next()
  })
  .catch(error => {
    console.log(`Could not fetch users due to: ${error.message}`);
    next(error);
  })
},
create = (req, res, next) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
  .then(user => {
    res.locals.data = user;
    next();
  })
  .catch(error => {
    console.log(`Could not create user due to: ${error.message}`);
    next(error);
  })
},
show = (req, res, next) => {
  User.findByPk(req.params.id)
  .then(user => {
    if (user) {
      return user.getTodos();
    } else {
      res.locals.data = {
        status: false,
        message: "User not found. Try again later!"
      }

      return next()
    }
  })
  .then(userTodolist => {
    res.locals.data = userTodolist;
    next();
  })
  .catch(error => {
    console.log(`Error fetching user by id due to: ${error.message}`);
    next(error);
  })
},
respondJSON = (req, res) => {
  const { data } = res.locals;

  res.json(data);
};

export { index, create, show, respondJSON};