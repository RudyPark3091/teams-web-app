package com.example.demo.service;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.example.demo.domain.Person;
import com.example.demo.domain.PersonRepository;
import com.example.demo.domain.User;
import com.example.demo.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PersonRepository personRepository;

    public User createUser(String id, String name) {
        User user = new User(id, name);
        userRepository.save(user);
        return user;
    }

    public Person createPerson(String id, String name, String alias, int age) {
        Person person = new Person(id, name, alias, age);
        personRepository.save(person);
        return person;
    }
}
