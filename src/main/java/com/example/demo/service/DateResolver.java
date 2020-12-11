package com.example.demo.service;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.example.demo.domain.Date.Date;
import com.example.demo.domain.Todo.Todo;
import org.springframework.stereotype.Component;

@Component
public class DateResolver implements GraphQLResolver<Todo> {
    public Date startDate(Todo todo) {
        return todo.getStartDate();
    }

    public Date endDate(Todo todo) {
        return todo.getEndDate();
    }
}
