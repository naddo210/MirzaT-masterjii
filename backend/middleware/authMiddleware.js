const protect = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth || auth !== 'Basic ' + Buffer.from('admin:admin123').toString('base64')) {
    res.set('WWW-Authenticate', 'Basic realm="Admin Area"');
    res.status(401).send('Authentication required');
    return;
  }

  next();
};

module.exports = protect;