package usermodelexample;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserModel {
    /**
     * Fields
     */

    @Id
    @GeneratedValue
    private Integer Id;
    private  String firstname;
    private String lastname;
    private int age;

    public UserModel() {

    }
/**
     * Constructor for the model UserModel Class
     * @param Id
     * @param firstname
     * @param lastname
     * @param age
     */

    public UserModel(Integer Id, String firstname, String lastname, int age) {
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
    public void setFirstname(String firstname) {
        this.firstname= firstname;
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

    public void lastname(String datum) {
    }

    public void firstname(String datum) {
    }

    public void age(String datum) {
    }

}
