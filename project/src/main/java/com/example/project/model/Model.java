package com.example.project.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
//@EnableJpaRepositories(basePackages = { "com.example.project.model" })
@Table(name = "bymModel")
public class Model {

    @Id
    @Column(name = "id")
    private long id;

    @Column(name = "Latitude")
    private float Latitude;

    @Column(name = "Longitude")
    private float Longitude;


    public Model() {

    }

    public Model(long id, float Latitude, float Longitude) {
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

    public float getLatitude() {
        return Latitude;
    }

    public void setLatitude(float latitude) {
        Latitude = latitude;
    }

    public float getLongitude() {
        return Longitude;
    }

    public void setLongitude(float longitude) {
        Longitude = longitude;
    }

    @Override
    public String toString() {
        return "Model{" +
                "id=" + id +
                ", Latitude=" + Latitude +
                ", Longitude=" + Longitude +
                '}';
    }
}
