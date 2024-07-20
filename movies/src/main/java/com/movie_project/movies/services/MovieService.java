package com.movie_project.movies.services;

import com.movie_project.movies.repositories.MovieRepository;
import com.movie_project.movies.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovieById(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
