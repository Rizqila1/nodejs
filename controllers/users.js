const messages = require("../utils/messages");
const fs = require("fs");
const Users = require("../moduledata/users");

const newUser = async (req, res) => {
  const body = req.body;
  const file = req.file;
  const data = { ...body };
  if (!body.email || !body.name || !body.age) {
    return messages(res, 422, "Email/Name/Age is required");
  }

  if (file) {
    data.image_url = file.filename;
    try {
      await Users.sync();
      const detailUser = await Users.findOne({
        where: {
          email: body.email,
        },
      });

      if (!detailUser) {
        const result = await Users.create(data);
        messages(res, 201, "Create User Succeed", result);
      } else {
        const path = `./public/${file.filename}`;
        fs.unlinkSync(path);

        return messages(res, 400, "Email is already exist");
      }
    } catch (e) {
      messages(res, 500, e.message);
    }
  } else {
    return messages(res, 400, "Image Field Required");
  }
};

const detailUser = async (req, res) => {
  try {
    await Users.sync();
    const id = req.params.id;
    const detailUser = await Users.findOne({
      where: {
        id,
      },
    });

    if (!detailUser) {
      messages(res, 404, `Id ${id} not found`);
    } else {
      const { id, users_id, name, email, image_url } = detailUser;
      messages(res, 200, `ID FOUND`, { id, users_id, name, email, image_url });
    }
  } catch (e) {
    messages(res, 500, e.message);
  }
};

const allData = async (req, res) => {
  try {
    await Users.sync();
    const data = await Users.findAll();
    const newData = data.map((item) => {
      const { id, users_id, name, email, image_url } = item;
      return {
        id,
        users_id,
        name,
        email,
        image_url,
      };
    });
    messages(res, 200, "All DAta", newData);
  } catch (e) {
    messages(res, 500, e.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await Users.sync();
    const detailUser = await Users.findOne({
      where: {
        id,
      },
    });

    if (!detailUser) {
      messages(res, 404, "ID NOT FOUND");
    } else {
      const path = `./public/${detailUser.image_url}`;
      fs.unlinkSync(path);

      await Users.destroy({
        where: {
          id,
        },
      });

      messages(res, 200, "Delete Success");
    }
  } catch (e) {
    messages(res, 500, e.message);
  }
};

const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const file = req.file;
    const body = req.body;
    await Users.sync();
    const detailUser = await Users.findOne({
      where: {
        id,
      },
    });

    if (!detailUser) {
      const path = `./public/${file.filename}`;
      fs.unlinkSync(path);
      messages(res, 404, "ID NOT FOUND");
    } else {
      if (!file) delete body.image_url;
      else {
        body.image_url = file.filename;
        const path = `./public/${detailUser.image_url}`;
        if (fs.existsSync(path)) {
          fs.unlinkSync(path);
        }
      }

      await Users.update(body, {
        where: {
          id,
        },
      });

      messages(res, 200, "Update Success");
    }
  } catch (e) {
    messages(res, 500, e.message);
  }
};

module.exports = {
  newUser,
  detailUser,
  allData,
  deleteUser,
  editUser,
};
