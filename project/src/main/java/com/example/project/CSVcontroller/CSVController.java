package com.example.project.CSVcontroller;

import com.example.project.helper.CsvHelper;
import com.example.project.message.ResponseMessage;
import com.example.project.model.Model;
import com.example.project.service.CSVService;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.List;

@CrossOrigin("http://localhost:8080")
@Controller
@RequestMapping("/api/csv")
public class CSVController {

    final
    CSVService fileService;

    public CSVController(CSVService fileService) {
        this.fileService = fileService;
    }


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
            c = DriverManager
                    .getConnection("jdbc:postgresql://localhost:5432/esri",
                            "postgres", "Iamrigo27");
            System.out.println("Opened database successfully");
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return c;
    }


    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file")MultipartFile file){
        String message = "";
        if (CsvHelper.hasCSVFormat(file)) {
            try {
                fileService.save(file);

                message = "Uploaded the file successfully: " + file.getOriginalFilename();
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Could not upload the file: " + file.getOriginalFilename() + "!";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }
        message = "Please upload a csv file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    @RequestMapping(params = "POST")
    @GetMapping(value = "/model")
    public ResponseEntity<List<Model>> getAllModel() {
        try {
            List<Model> model = fileService.getAllTutorials();

            if (model.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(model, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @GetMapping("/download")
    public ResponseEntity<Resource> getFile() {
        String filename = "model.csv";
        InputStreamResource file = new InputStreamResource(fileService.load());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .contentType(MediaType.parseMediaType("application/csv"))
                .body(file);
    }


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


}
