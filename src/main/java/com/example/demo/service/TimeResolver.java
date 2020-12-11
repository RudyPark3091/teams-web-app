package com.example.demo.service;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.example.demo.domain.Date.Date;
import com.example.demo.domain.Time.Time;
import org.springframework.stereotype.Component;

@Component
public class TimeResolver implements GraphQLResolver<Date> {
    public Time time(Date date) {
        return date.getTime();
    }
}
