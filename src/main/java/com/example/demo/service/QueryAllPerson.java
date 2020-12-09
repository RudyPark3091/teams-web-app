package com.example.demo.service;

import com.example.demo.domain.person.Person;
import com.example.demo.web.dto.PersonDto;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class QueryAllPerson implements GraphQLQueryResolver {

    public List<PersonDto> getPerson() {
        Person p1 = new Person(0, "HM", "Rudy", 25);
        Person p2 = new Person(1, "BG", "PPIDDONG", 28);
        Person p3 = new Person(2, "TG", "NGM", 25);
        Person p4 = new Person(3, "MJ", "WHITE", 29);

        List<Person> all = List.of(p1, p2, p3, p4);
        return PersonDto.from(all);
    }
}
