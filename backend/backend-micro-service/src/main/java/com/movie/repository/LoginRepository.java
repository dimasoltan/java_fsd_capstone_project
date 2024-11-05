package com.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.entity.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, String>{

}
