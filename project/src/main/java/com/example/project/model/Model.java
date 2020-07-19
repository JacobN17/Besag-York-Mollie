package com.example.project.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@EnableJpaRepositories(basePackages = { "com.example.project.model" })
@Table(name = "bym_model")
public class Model {

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "Latitude")
    private String Latitude;

    @Column(name = "Longitude")
    private String Longitude;


    public Model() {

    }

    public Model(long id, String Latitude, String Longitude) {
        this.id=id;
        this.Latitude=Latitude;
        this.Longitude=Longitude;

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLatitude() {
        return Latitude;
    }

    public void setLatitude(String latitude) {
        Latitude = latitude;
    }

    public String getLongitude() {
        return Longitude;
    }

    public void setLongitude(String longitude) {
        Longitude = longitude;
    }

    @Override
    public String toString() {
        return "Model{" +
                "id=" + id +
                ", Latitude='" + Latitude + '\'' +
                ", Longitude='" + Longitude + '\'' +
                '}';
    }
}