package com.example.demo.service;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.demo.domain.Todo.Todo;
import com.example.demo.domain.Todo.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class QueryResolver implements GraphQLQueryResolver {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> todos() {
        return todoRepository.findAll();
    }

    public Todo getTodoById(String id) {
        return todoRepository.findById(id);
    }
}
