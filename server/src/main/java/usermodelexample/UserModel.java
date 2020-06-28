package usermodelexample;

import org.springframework.data.jpa.repository.EntityGraph;

import javax.persistence.*;
import java.io.Serializable;

@Entity
//@Table(name = "UserModel")
public class UserModel {
    /**
     * Fields
     */

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

//   @Column(name = "firstname")
    private  String firstname;

//    @Column(name = "firstname")
    private String lastname;

//    @Column(name = "age")
    private String age;


    public UserModel() {

    }
/**
     * Constructor for the model UserModel Class
     * @param Id
     * @param firstname
     * @param lastname
     * @param age
     */

    public UserModel(Long Id, String firstname, String lastname, String age) {
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
    public void setId(long Id) {
        this.Id = Id;
    }

    /**
     * Getter and Setter for firstname
     */
    public String getfirstname(){
        return this.firstname;
    }
    public void setfirstname(String firstname) {
        this.firstname= firstname;
    }

    /**
     * Getter and Setter for lastname
     */
    public String getlastname() {
        return this.lastname;
    }
    public void setlastname(String lastname) {
        this.lastname = lastname;
    }

    /**
     * Getter and Setter for age
     */
    public String getage() {
        return this.age;
    }

    public void setage(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "UserModel{" +
                "Id=" + Id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", age=" + age +
                '}';
    }

    /**
     * Not sure what these are supposed to do or if they work.
     * They has to be created to work with the UserDto class
     * @param datum
     */
//
//    public void lastname(String datum) {
//    }
//
//    public void firstname(String datum) {
//    }
//
//    public void age(String datum) {
//    }

}
