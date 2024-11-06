package com.movie.controller;

import com.movie.entity.Login;
import com.movie.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("login")
@RestController
@CrossOrigin
public class LoginController {
    @Autowired
    LoginService loginService;

    @PostMapping(value = "signin", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String signIn(@RequestBody Login login) {
        return loginService.signIn(login);
    }

    @PostMapping(value = "signup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String signUp(@RequestBody Login login) {
        return loginService.signUp(login);
    }
}
