package com.example.project.BYMController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@Controller
@RequestMapping("/api/BYM")
public class BymController {

    //Establishes connection to MYSQLdatabase
    private Connection mySQlconnect() {
        Connection c = null;
        Statement stmt = null;
        try {
            Class.forName("org.mysql.Driver");
            c = DriverManager
                    .getConnection("jdbc:mysql://localhost:3306/example",
                            "root", "password");
            System.out.println("Opened database successfully");
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return c;
    }

    //Establishes connection to database
    private Connection connect() {
        Connection c = null;
        Statement stmt = null;
        try {
            Class.forName("org.postgresql.Driver");
//            Class.forName("com.sap.db.jdbc.Driver");
            c = DriverManager
                    .getConnection("jdbc:postgresql://localhost:5432/esri",
                            "postgres", "Iamrigo27");
            System.out.println("Opened database successfully");
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return c;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    public void GetForm(@RequestParam Map<String, Float> params) throws SQLException {
        System.out.println("d: " + params.get("data") + " " + "dv: " + params.get("dataValues") + " " +
                "m: " + params.get("mean") + " " + "sd: " + params.get("sd"));
        Connection c = mySQlconnect();
        Statement s = null;
        try {
            s = c.createStatement();
            s.executeQuery("INSERT INTO example.BYM (data,values,mean,sd) VALUES ('csv','12232231','12.23','122');");

        } catch (Exception e) {
            System.err.println(e.getClass().getName()+": "+e.getMessage());
        } finally {
            s.close();
            c.close();
        }
    }


}









//        @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
//    public void GetFile(@RequestParam("file") MultipartFile file) throws SQLException {
//        System.out.println(file.getSize());
//        Connection c = mySQlconnect();
//        Statement s = null;
//        try {
//            s = c.createStatement();
//            ResultSet result = s.executeQuery("SELECT * FROM public.\"example\"");
//            System.out.println(getResults(result, "%-21s"));
//        } catch (Exception e) {
//            System.err.println(e.getClass().getName()+": "+e.getMessage());
//        } finally {
//            s.close();
//            c.close();
//        }
//    }

//    //Formats results of queries
//    private String getResults(ResultSet resultSet, String format) throws SQLException {
//        StringBuilder results = new StringBuilder();
//        ResultSetMetaData metaData = resultSet.getMetaData();
//
//        for (int i = 0; i < metaData.getColumnCount(); i++) {
//            results.append(String.format(format,metaData.getColumnName(i+1)));
//        }
//
//        while (resultSet.next()) {
//            for (int i = 0; i < metaData.getColumnCount(); i++) {
//                results.append(String.format(format,resultSet.getString(i+1)));
//            }
//        }
//
//        return results.toString();
//    }
//}
