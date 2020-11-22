package com.example.demo.web.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class HelloDto {
    @Getter
    private int id;
    @Getter
    private String name;
}
