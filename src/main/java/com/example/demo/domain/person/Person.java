package com.example.demo.domain.person;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Person {
    private int id;
    private String name;
    private String alias;
    private int age;
}
