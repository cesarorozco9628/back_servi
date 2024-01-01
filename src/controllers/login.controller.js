const { Users, Rol } = require('../models');
const bcryptjs = require('bcryptjs');





const login = async (req, res) => {
  const { password, email, username } = req.body;
  if (!password || !email || !username) {
    return res.status(400).json({ error: 'Faltan datos requeridos.' });
  }
  try {
    
    const user = await Users.findOne({ where: { email: email }, raw: true });
    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado.' });
    }
   
    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta.' });
    }

    delete user.password;
    // Éxito: enviar el usuario como respuesta
    res.json({user});

  } catch (error) {
    res.status(500).json({ mes_error: 'Error interno del servidor.', error  });
    console.error(error)
  }
}

module.exports = {
  login
}