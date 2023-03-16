export const checkUser = (req, res, next) => {
  console.log(req.session);

  if (!req.session.isLogin) return res.redirect("/");
  next();
};
