function sayHello(req, res) {
  let name = req.query.name;

  if (name == null) {
    name = "Tangina";
  } else if (name == "") {
    name = "World";
  }

  res.send("Hello " + name + "!");
}

module.exports = { sayHello };
