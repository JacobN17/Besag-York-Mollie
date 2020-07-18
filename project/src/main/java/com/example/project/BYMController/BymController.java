package com.example.project.BYMController;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@Controller
@RequestMapping("/api/bym")

public class BymController {

    //Establishes connection to MYSQLdatabase
    private Connection mySQlconnect() {
        Connection c = null;
        Statement stmt = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            c = DriverManager
                    .getConnection("jdbc:mysql://localhost:3306/example?useLegacyDatetimeCode=false&serverTimezone=PST",
                            "root", "password");
            System.out.println("Opened database successfully");
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return c;
    }

    //Establishes connection to database
    private Connection connect() {
        Connection cO = null;
        Statement stmt = null;
        try {
            Class.forName("org.postgresql.Driver");
//            Class.forName("com.sap.db.jdbc.Driver");
            cO = DriverManager
                    .getConnection("jdbc:postgresql://localhost:5432/esri",
                            "postgres", "Iamrigo27");
            System.out.println("Opened database successfully");
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return cO;
    }

//    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void GetForm(@RequestParam Map<String, Float> params) throws SQLException {
        System.out.println("d: " + params.get("dataw") + " " + "dv: " + params.get("datavalues") + " " +
                "m: " + params.get("mean") + " " + "sd: " + params.get("sd"));
        Connection c = connect();
        Statement s = null;
        try {
            s = c.createStatement();
            s.executeUpdate("INSERT INTO BYM (dataw,datavalues,mean,sd) VALUES (" + params.get("data") + "," +
                    params.get("dataValues") + "," + params.get("mean") + "," + params.get("sd") + ");");

        } catch (Exception e) {
            System.err.println(e.getClass().getName()+": "+e.getMessage());
        } finally {
            s.close();
            c.close();
        }
    }


}