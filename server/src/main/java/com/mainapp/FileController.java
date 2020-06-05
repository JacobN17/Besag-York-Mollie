package com.mainapp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.transform.Result;
import java.sql.*;
import java.util.Arrays;
import java.util.List;

/**
 * the controller class handles the uploading and parsing of a CSV file
 */
@RestController
//@CrossOrigin("http://localhost:3000") // Allow requests from specific origins
public class FileController {

    //Establishes connection to database
    private Connection connect() {
        Connection c = null;
        Statement stmt = null;
        try {
            Class.forName("org.postgresql.Driver");
            c = DriverManager
                    .getConnection("jdbc:postgresql://localhost:5432/postgres",
                            "postgres", "root");
            System.out.println("Opened database successfully");
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return c;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    public void GetFile(@RequestParam("file") MultipartFile file) throws SQLException {
        System.out.println(file.getSize());
        Connection c = connect();
        Statement s = null;
        try {
            s = c.createStatement();
            ResultSet result = s.executeQuery("SELECT * FROM public.\"Order_T\"");
            System.out.println(getResults(result, "%-21s"));
        } catch (Exception e) {
            System.err.println(e.getClass().getName()+": "+e.getMessage());
        } finally {
            s.close();
            c.close();
        }
    }

    //Formats results of queries
    private String getResults(ResultSet resultSet, String format) throws SQLException {
        StringBuilder results = new StringBuilder();
        ResultSetMetaData metaData = resultSet.getMetaData();

        for (int i = 0; i < metaData.getColumnCount(); i++) {
            results.append(String.format(format,metaData.getColumnName(i+1)));
        }

        while (resultSet.next()) {
            for (int i = 0; i < metaData.getColumnCount(); i++) {
                results.append(String.format(format,resultSet.getString(i+1)));
            }
        }

        return results.toString();
    }
}


