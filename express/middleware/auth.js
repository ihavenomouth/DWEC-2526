function verify(req, res, next) {

  const token = req.cookies.token;
  // Si no hay token no se puede acceder a la ruta asegurada
  if(!token){
    res.status(401).send("No se puede realizar la petición sin estar autenticado");
    return;
  }

  try {
    
    var decodedToken = jwt.verify(token, process.env.CLAVE_CIFRADO_TOKEN);
    req.id = decodedToken.id;
    req.admin = decodedToken.admin;
    req.email = decodedToken.email;

  } catch(err) {
    res.status(401).send("No se puede realizar la petición sin estar autenticado");
  }


  next(); // Esto es la parte que no se puede olvider
}

export default verify;
