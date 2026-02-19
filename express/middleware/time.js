function time(req, res, next) {
  console.log( Date.now() );
  next(); // Esto es la parte que no se puede olvider
}

export default time;
