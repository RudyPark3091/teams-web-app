package com.example.demo;

import com.example.demo.User;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class UserRepository {

    private Map<String, User> userMap = new ConcurrentHashMap<>();

    @PostConstruct
    private void loadSchema() {
        userMap.put("user1", new User("user1", "HM"));
        userMap.put("user2", new User("user2", "TG"));
        userMap.put("user3", new User("user3", "AA"));
    }

    public User findById(String id) {
        return userMap.get(id);
    }

    public User save(User user) {
        String name = "user";
        name += Integer.toString(userMap.values().size() + 1);
        userMap.put(name, user);
        return user;
    }
}
