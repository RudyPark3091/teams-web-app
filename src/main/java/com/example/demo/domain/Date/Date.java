package com.example.demo.domain.Date;

import com.example.demo.domain.Time.Time;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Date {
    private int year;
    private int month;
    private int date;
    private int day;
    private Time time;
}
