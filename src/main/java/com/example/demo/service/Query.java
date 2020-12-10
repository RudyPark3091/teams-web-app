package com.example.demo.service;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.demo.domain.Person;
import com.example.demo.domain.PersonRepository;
import com.example.demo.domain.User;
import com.example.demo.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PersonRepository personRepository;

    public User user(String id) {
        return userRepository.findById(id);
    }

    public Person person(String id) {
        return personRepository.findById(id);
    }

    public List<Person> people() {
        return personRepository.findAll();
    }
}
