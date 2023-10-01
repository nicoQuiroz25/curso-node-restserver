const {response} = require('express');

const usuariosGet = (req, res) => {

  const params = req.params

  res.json({
    msg: "get API - usuariosGet",
  });
};

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
      msg: "post API - usuariosPost",
      nombre,
      edad
    });
};
  
const usuariosPut = (req, res) => {

    const {id} = req.params;

    res.json({
      msg: "put API - usuariosPut",
      id
    });
};

const usuariosPatch = (req, res) => {
    res.json({
      msg: "patch API - usuariosPatch",
    });
};

const usuariosDelete = (req, res) => {
    res.json({
      msg: "delete API - usuariosDelete",
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
