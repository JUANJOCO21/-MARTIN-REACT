package com.martin.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.martin.backend.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
}
