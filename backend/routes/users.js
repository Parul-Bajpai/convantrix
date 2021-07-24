const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const bcrypt = require("bcrypt");

const { auth } = require("../middleware/auth");
const { response } = require("express");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
    cart: req.user.cart,
    history: req.user.history,
  });
});
router.post("/reset", auth, (req, res) => {
  User.findOne({ email: req.user.email }, (err, user) => {
    if (!user)
      return res.json({
        Success: false,
        message: "No user found with that email address.",
      });
    else {
      bcrypt.hash(req.body.password, 10, (err, encrypted) => {
        if (err)
          return res.json({
            Success: false,
            message: "Something went wrong",
          });
        else {
          User.updateOne(
            { _id: req.user._id },
            { password: encrypted },
            (error, result) => {
              if (error) {
                return res.json({
                  Success: false,
                  message: "Something went wrong",
                });
              } else {
                return res.json({
                  Success: true,
                  message: result,
                });
              }
            }
          );
        }
      });
    }
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
          token: user.token,
        });
      });
    });
  });
});

router.post("/reset", auth, (req, res) => {
  User.findOne({ email: req.user.email }, (err, user) => {
    if (!user)
      return res.json({
        Success: false,
        message: "No user found with that email address.",
      });
    console.log(user);
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ Success: false, message: "Wrong password" });

      User.findOneAndUpdate(
        { _id: req.user._id },
        { $set: { password: req.body.confirmPassword } },
        (error, response) => {
          if (error) {
            console.log(err);
            return res.json({ Success: false, message: "Not Updated" });
          } else {
            console.log(response);
            return res.json({ Success: true, response });
          }
        }
      );
    });
    // user.comparePassword(req.body.password, (err, isMatch) => {
    //   if (!isMatch)
    //     return res.json({ Success: false, message: "Wrong password" });

    //   user.generateToken((err, user) => {
    //     if (err) return res.status(400).send(err);
    //     res.cookie("w_authExp", user.tokenExp);
    //     res.cookie("w_auth", user.token).status(200).json({
    //       loginSuccess: true,
    //       userId: user._id,
    //       token: user.token,
    //     });
    //   });
    // });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

router.post("/addToCart", auth, (req, res) => {
  User.find({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;
    userInfo[0].cart.forEach((cartInfo) => {
      if (cartInfo.id === req.query.productId) {
        duplicate = true;
      }
    });
    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user._id, "cart.id": req.query.productId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ sucess: false, err });
          return res.status(200).json(userInfo.cart);
        }
      );
    } else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: req.query.productId,
              quantity: 1,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ sucess: false, err });
          return res.status(200).json(userInfo.cart);
        }
      );
    }
  });
});

module.exports = router;
