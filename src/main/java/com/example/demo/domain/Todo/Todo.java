package com.example.demo.domain.Todo;

import com.example.demo.domain.Date.Date;
import com.example.demo.domain.User.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Todo {
    private String id;
    private Date startDate;
    private Date endDate;
    private String content;
    private Boolean isAssignedForTeam;
    private List<User> assigned;
}
