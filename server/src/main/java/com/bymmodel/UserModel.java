package com.bymmodel;

import com.opencsv.bean.CsvBindByName;

public class UserModel {
    /**
     * Fields
     */
    @CsvBindByName
    private long Id;
    @CsvBindByName
    private String firstname;
    @CsvBindByName
    private String lastname;
    @CsvBindByName
    private int age;

    /**
     * Constructor for the model UserModel Class
     * @param Id
     * @param firstname
     * @param lastname
     * @param age
     */
    public UserModel(long Id, String firstname, String lastname, int age) {
        this.Id = Id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    /**
     * Getter and setter for firstname
     */
    public long getId() {
        return this.Id;
    }
    public void setId(int Id) {
        this.Id = Id;
    }

    /**
     * Getter and Setter for firstname
     */
    public String getFirstname(){
        return this.firstname;
    }
    public void setFirstname(String fName) {
        this.firstname= fName;
    }

    /**
     * Getter and Setter for lastname
     */
    public String getLastname() {
        return this.lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    /**
     * Getter and Setter for age
     */
    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
