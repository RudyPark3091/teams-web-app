package com.example.demo;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
    private UserRepository userRepository;
    private PersonRepository personRepository;

    public Mutation(UserRepository userRepository, PersonRepository personRepository) {
        this.userRepository = userRepository;
        this.personRepository = personRepository;
    }

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
