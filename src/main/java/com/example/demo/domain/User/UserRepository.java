package com.example.demo.domain.User;

import com.example.demo.domain.User.User;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class UserRepository {

    private Map<String, User> userMap = new ConcurrentHashMap<>();

    @PostConstruct
    private void loadSchema() {
        userMap.put("user1", new User("user1", "HM", "#ff0000"));
        userMap.put("user2", new User("user2", "TG", "#00ff00"));
        userMap.put("user3", new User("user3", "AA", "#0000ff"));
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
