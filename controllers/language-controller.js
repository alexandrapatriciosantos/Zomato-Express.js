
const getBrowserLang = (req, res, next) => {
  let languageId = 1;
  if (req.acceptsLanguages('pt')) {
    languageId = 2;
  }
  req.languageId = languageId;
  next();
};

// const preferredLanguage = (req, res, next)

module.exports = { getBrowserLang };
