package com.example.demo.service;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.example.demo.domain.Todo.Todo;
import com.example.demo.domain.User.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserResolver implements GraphQLResolver<Todo> {
    public List<User> assigned(Todo todo) {
        return todo.getAssigned();
    }
}
