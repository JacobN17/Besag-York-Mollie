package com.bymmodel.server.model;

import com.opencsv.bean.CsvBindByName;

public class CSVModel {

    @CsvBindByName
    private long Id;
    @CsvBindByName
    private float longitude;
    @CsvBindByName
    private float latitude;

    public CSVModel() {
    }

    public CSVModel(long id, float longitude, float latitude) {
        Id = id;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public void setId(long id) {
        Id = id;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public long getId() {
        return Id;
    }

    public float getLongitude() {
        return longitude;
    }

    public float getLatitude() {
        return latitude;
    }

    @Override
    public String toString() {
        return "CSVModel{" +
                "Id=" + Id +
                ", longitude=" + longitude +
                ", latitude=" + latitude +
                '}';
    }
}
