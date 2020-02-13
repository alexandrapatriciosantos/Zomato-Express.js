
const getBrowserLang = (req, res, next) => {
  const preferredLanguage = req.get('Preferred-Language');
  let languageId = 1;
  let language = 'en';
  if (preferredLanguage === 'pt') {
    languageId = 2;
    language = 'pt';
  }
  if (!preferredLanguage && req.acceptsLanguages('pt')) {
    languageId = 2;
    language = 'pt';
  }
  req.languageId = languageId;
  req.language = language;
  next();
};


module.exports = { getBrowserLang };
