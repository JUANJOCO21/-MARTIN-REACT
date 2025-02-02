package com.martin.backend.services;

import com.martin.backend.models.Usuario;
import java.util.List;

public interface UsuarioService {
    List<Usuario> obtenerUsuarios();
    void guardarUsuario(Usuario usuario);
    Usuario obtenerUsuarioPorId(Long id);
    void eliminarUsuario(Long id);
    Usuario actualizarUsuario(Long id, Usuario usuario);
}
