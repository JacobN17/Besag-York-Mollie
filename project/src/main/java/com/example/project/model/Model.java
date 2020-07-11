package com.example.project.model;


import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@EnableJpaRepositories(basePackages = { "com.example.project.model" })
@Table(name = "exuser")
public class Model {

    @Id
    @Column(name = "id")
    private long id;
//
    @Column(name = "firstname")
    private String firstname;
//
    @Column(name = "lastname")
    private String lastname;
//
    @Column(name = "age")
    private String age;

    public Model() {

    }

    public Model(long id, String firstname, String lastname, String age) {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Model{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}
