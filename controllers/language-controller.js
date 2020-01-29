
const getBrowserLang = (req, res, next) => {
  const preferredLanguage = req.get('Preferred-Language');

  let languageId = 1;
  if (preferredLanguage === 'pt') {
    languageId = 2;
  }
  if (!preferredLanguage && req.acceptsLanguages('pt')) {
    languageId = 2;
  }
  req.languageId = languageId;
  next();
};


module.exports = { getBrowserLang };
