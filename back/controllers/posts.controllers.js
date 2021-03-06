const { Post } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const fs = require("fs");

// Display all messages
exports.getPost = async (req, res, next) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        { model: User, attributes: ["first_name", "avatar", "last_name"] },
        Comment,
      ],
    });

    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ error });
  }
};

// Display one message
exports.getOnePost = async (req, res, next) => {
  try {
    const postFound = await Post.findOne({
      where: { id: postParams.id },
    });
    res.status(200).json(postFound);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Write new message
exports.createPost = async (req, res, next) => {
  try {
    let post = {};
    const user = await User.findByPk(req.userId);
    if (user !== null) {
      if (req.file) {
        post.imageUrl = `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`;
        post.message = req.body.message;
        post.UserId = req.userId;
      } else {
        post.imageUrl = "";
        post.message = req.body.message;
        post.UserId = req.userId;
      }
      Post.create(post);
      res.status(201).json({ post: post, message: "Message have been send" });
    } else {
      res.status(400).send({ error: "User is null " });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

// Modify message
exports.updatePost = async (req, res, next) => {
  try {
    let post = await Post.findByPk(req.params.id);
    if (post.UserId == req.userId || req.isAdmin) {
      if (req.file) {
        if (post.imageUrl) {
          const filename = post.imageUrl.split("/images/")[1];
          fs.unlink(`images/${filename}`, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`Deleted file: images/${filename}`);
            }
          });
        }
        post.imageUrl = `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`;
      }
      if (req.body.message) {
        post.message = req.body.message;
      }
      const newPost = await post.save({
        fields: ["message", "imageUrl"],
      });
      res.status(200).json({ newPost: newPost, message: "Message edited" });
    } else {
      return res.status(403).send({ message: "Not authorized ... " });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// Delete message
exports.deletePost = async (req, res, next) => {
  try {
    const postFound = await Post.findByPk(req.params.id);
    if (postFound.UserId == req.userId || req.isAdmin) {
      if (postFound.imageUrl != null) {
        const filename = postFound.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          postFound.destroy();
        });
        res.status(200).json({ message: "Your message has been deleted" });
      } else {
        postFound.destroy();
        res.status(200).json({ message: "Your message has been deleted" });
      }
    } else {
      return res.status(403).send({ message: "Not authorized ... " });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Add new commentary
exports.createComment = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    const post = await Post.findByPk(req.body.PostId);
    const comment = new Comment({
      UserId: user.id,
      PostId: post.id,
      text: req.body.text,
      first_name: user.first_name,
      last_name: user.last_name,
    });
    comment.save();
    res.status(200).json({
      ...comment,
      User: { first_name: user.first_name, last_name: user.last_name },
    });
    console.log(post, user);
  } catch (error) {
    res.status(404).json({ error: "Bad request" });
  }
};

// Delete commentary
exports.deleteComment = async (req, res, next) => {
  try {
    const commentFound = await Comment.findByPk(req.params.id);
    if (commentFound.UserId == req.userId || req.isAdmin) {
      commentFound.destroy();
      res.status(200).json({ message: "Comment has been deleted" });
    } else {
      return res.status(403).send({ message: "Not authorized ... " });
    }
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
};
