package com.bymmodel;

import com.opencsv.bean.CsvBindByName;

public class UserModel {
    @CsvBindByName
    private long id;
    @CsvBindByName
    private String firstname;
    @CsvBindByName
    private String lastname;
    @CsvBindByName
    private int age;

    public UserModel(long id, String firstname, String lastname, int age) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }




}
