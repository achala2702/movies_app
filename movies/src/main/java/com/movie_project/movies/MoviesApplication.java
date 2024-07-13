package com.movie_project.movies;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {

	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.configure().load();
		System.setProperty("MONGODB_DATABASE", dotenv.get("MONGODB_DATABASE"));
		System.setProperty("MONGODB_URL", dotenv.get("MONGODB_URL"));
		SpringApplication.run(MoviesApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot(){
		return "hello world";
	}

}
