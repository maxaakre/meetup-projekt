const Datastore = require("nedb-promise");
const meet = new Datastore({
  filename: "./db/newmeting.db",
  autoload: true,
});

module.exports = {
  //GET ALL PRODUCTS
  async getAll() {
    return await meet.find({});
  },

  //CREATE NEW PRODUCT
  async create(body) {
    const newEvent = {
      id: Date.now(),
      img: "groupmeet",
      title: body.title,
      desc: body.desc,
      content: body.content,
      loc: body.loc,
      date: body.date,
      attendees: body.attendees,
    };
    return await meet.insert(newEvent);
  },
};
