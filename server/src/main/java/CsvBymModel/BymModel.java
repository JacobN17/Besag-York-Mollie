package CsvBymModel;

import com.opencsv.bean.CsvBindByName;

public class BymModel {

    /**
     * Fields for BYM
     */
    @CsvBindByName
    private long Id;
    @CsvBindByName
    private float longitude;
    @CsvBindByName
    private float latitude;

    /**
     * Constructor for BYMModel
     * @param id
     * @param longitude
     * @param latitude
     */

    public BymModel(long id, float longitude, float latitude) {
        this.Id = id;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    /**
     * Getter and Setter for Id
     */
    public long getId() {
        return Id;
    }

    public void setId(long id) {
        this.Id = id;
    }

    /**
     *Getter and Setter for Longitude
     */
    public float getLongitude() {
        return longitude;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    /**
     * Getter and Setter for Latitude
     */
    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }
}
