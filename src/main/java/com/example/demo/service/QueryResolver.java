package com.example.demo.service;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.demo.domain.Todo.Todo;
import com.example.demo.domain.User.User;
import com.example.demo.domain.Todo.TodoRepository;
import com.example.demo.domain.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class QueryResolver implements GraphQLQueryResolver {
    @Autowired
    private TodoRepository todoRepository;
		@Autowired
		private UserRepository userRepository;

    public List<Todo> todos() {
		return todoRepository.findAll();
    }

    public Todo getTodoById(String id) {
		return todoRepository.findById(id);
    }

	public List<User> users() {
		return userRepository.findAll();
	}

	public List<Todo> userAssignedTodo(String userId) {
    	User user = userRepository.findById(userId);
    	return todoRepository.findByUser(user);
	}
}
