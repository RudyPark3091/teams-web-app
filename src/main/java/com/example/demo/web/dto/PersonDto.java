package com.example.demo.web.dto;

import com.example.demo.domain.person.Person;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
public class PersonDto {
    private int id;
    private String name;
    private String alias;
    private int age;

    public static List<PersonDto> from(Collection<Person> people) {
        return people.stream().map(PersonDto::from).collect(Collectors.toList());
    }

    public static PersonDto from(Person person) {
        return PersonDto.builder()
                .id(person.getId())
                .name(person.getName())
                .alias(person.getAlias())
                .age(person.getAge())
                .build();
    }
}
