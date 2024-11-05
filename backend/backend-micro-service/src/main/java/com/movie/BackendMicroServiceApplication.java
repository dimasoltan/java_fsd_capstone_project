package com.movie;

import com.movie.entity.Login;
import com.movie.repository.LoginRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

@SpringBootApplication(scanBasePackages = "com")
@EnableDiscoveryClient
@EntityScan(basePackages = "com.movie.entity")
@EnableJpaRepositories(basePackages = "com.movie.repository")
public class BackendMicroServiceApplication {

    @Autowired
    LoginRepository loginRepository;

    @PostConstruct
    public void init() {
        Login ll = new Login();
        ll.setEmailid("admin@gmail.com");
        ll.setPassword("admin@123");
        ll.setTypeofuser("admin");
        Optional<Login> result = loginRepository.findById("admin@gmail.com");
        if (result.isPresent()) {
            System.out.println("Already account present");
        } else {
            loginRepository.save(ll);
            System.err.println("Admin account created");
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendMicroServiceApplication.class, args);
        System.out.println("backend micro service up on port number 9090");
    }


}
