package com.example.demo.domain.person;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Entity
@AllArgsConstructor
public class Person {
    @Id
    private int id;

    @Column
    private String name;
    @Column
    private String alias;
    @Column
    private int age;
}
