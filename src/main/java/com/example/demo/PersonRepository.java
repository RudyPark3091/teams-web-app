package com.example.demo;

import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class PersonRepository {

    private Map<String, Person> personMap = new ConcurrentHashMap<>();

    @PostConstruct
    private void loadSchema() {
        personMap.put("1", new Person("1", "HM", "Rudy", 25));
        personMap.put("2", new Person("2", "TG", "NGM", 20));
        personMap.put("3", new Person("3", "DG", "THK", 28));
        personMap.put("4", new Person("4", "TY", "EHO", 15));
    }

    public Person findById(String id) {
        return personMap.get(id);
    }

    public List<Person> findAll() {
        return new ArrayList<>(personMap.values());
    }

    public Person save(Person person) {
        String name = "user";
        name += Integer.toString(personMap.values().size() + 1);
        personMap.put(name, person);
        return person;
    }
}
