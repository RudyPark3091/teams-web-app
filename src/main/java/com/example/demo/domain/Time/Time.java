package com.example.demo.domain.Time;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Time {
    private int hour;
    private int minute;
    private Boolean isAm;
    private Boolean isFormat24;
}
