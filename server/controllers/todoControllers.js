import Todo from "../models/todo"


const index = (req, res, next) => {
  console.log("type ", req.query.type)
  Todo.findAll()
  .then((todolist) => {
    res.locals.data = todolist;
    //res.json(todolist);
    next()
  })
  .catch((error) => {
    console.log(`Could not fetch todo list to due: ${error.message}`);
    next(error);
  })
},
create = (req, res, next) => {
  Todo.create({
    todo: req.body.todo,
    UserId: req.body.owner,
  })
  .then(todo => {
    res.locals.data = todo;
    next();
  })
  .catch(error => {
    console.log(`Could not create todo due to: ${error.message}`);
    next(error)
  })
},
edit = (req, res, next) => {
  console.log("put route")
  res.status(405)
  res.locals.data = req.params.id;

  next()
},
destroy = (req, res, next) => {
  console.log("delete route");
  res.status(405);
  res.locals.data = req.params.id;
  next()
},
patch = (req, res, next) => {
  console.log("patch route");
  res.status(405);
  res.locals.data = req.params.id;
  next()
},
respondJSON = (req, res) => {
  const { data } = res.locals;
  res.json(data);
};

export {index, create, edit, destroy, patch, respondJSON}