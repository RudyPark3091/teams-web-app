package com.example.demo;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Query implements GraphQLQueryResolver {
    private UserRepository userRepository;
    private PersonRepository personRepository;

    public Query(UserRepository userRepository, PersonRepository personRepository) {
        this.userRepository = userRepository;
        this.personRepository = personRepository;
    }

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
