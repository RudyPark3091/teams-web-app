package com.example.demo;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.demo.User;
import com.example.demo.UserRepository;
import org.springframework.stereotype.Component;

@Component
public class QueryAllPerson implements GraphQLQueryResolver {
//    private PersonRepository personRepository;
    private UserRepository userRepository;

    public QueryAllPerson(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    public List<PersonDto> people() {
//        Person p1 = new Person(0, "HM", "Rudy", 25);
//        Person p2 = new Person(1, "BG", "PPIDDONG", 28);
//        Person p3 = new Person(2, "TG", "NGM", 25);
//        Person p4 = new Person(3, "MJ", "WHITE", 29);

//        List<Person> all = List.of(p1, p2, p3, p4);
//        final List<Person> all = personRepository.findAll();
//        return PersonDto.from(all);
//    }

    public User user(String id) {
        return userRepository.findById(id);
    }
}
