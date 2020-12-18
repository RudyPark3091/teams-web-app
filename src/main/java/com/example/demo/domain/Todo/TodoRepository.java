package com.example.demo.domain.Todo;

import com.example.demo.domain.Date.Date;
import com.example.demo.domain.Time.Time;
import com.example.demo.domain.User.User;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Repository
public class TodoRepository {

    private Map<String, Todo> todoMap = new ConcurrentHashMap<>();

    @PostConstruct
    public void loadSchema() {
        Time time = new Time(10, 0, false, false);
        Date startDate = new Date(2020, 10, 12, 2, time);
        Date endDate = new Date(2020, 11, 13, 3, time);
        User user = new User("user1", "HM", "#ff0000");
        User user2 = new User("user2", "TG", "#00ff00");
        String id = "asdfasdf";
        todoMap.put(id, new Todo(id, startDate, endDate, "Content", false, Arrays.asList(user, user2)));

        Time time2 = new Time(10, 0, false, false);
        Date startDate2 = new Date(2020, 12, 10, 2, time);
        Date endDate2 = new Date(2020, 12, 17, 3, time);
        String id2 = "aldkfj";
        todoMap.put(id2, new Todo(id2, startDate2, endDate2, "Content", false, Arrays.asList(user, user2)));

        Time time3 = new Time(10, 0, false, false);
        Date startDate3 = new Date(2019, 9, 12, 2, time);
        Date endDate3 = new Date(2020, 12, 13, 3, time);
        String id3 = "qpeidj";
        todoMap.put(id3, new Todo(id3, startDate3, endDate3, "Content", false, Arrays.asList(user, user2)));
    }

    public List<Todo> findAll() {
        return new ArrayList<Todo>(todoMap.values());
    }

    public Todo findById(String id) {
        return todoMap.get(id);
    }

    public List<Todo> findByUser(User user) {
        return todoMap
                .values()
                .stream()
                .filter(todo -> todo.getAssigned().contains(user))
                .collect(Collectors.toList());
    }
}
