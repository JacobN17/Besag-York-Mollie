package com.bymmodel.server.constroller;


import com.bymmodel.server.model.CSVModel;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

/**
 *
 */
@CrossOrigin("*")
@RestController
public class CSVFileUploadController {

    private static final Logger logger = LoggerFactory.getLogger(CSVFileUploadController.class);

    /**
     * post mapping that accepts MULTIPART_FORM_DATA_VALUE.
     * @param file the Multipart file
     * @return response
     */
    @PostMapping(value = "/fileupload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFile(@RequestParam MultipartFile file) {
        logger.info(String.format("File name '%s' uploaded successfully.", file.getOriginalFilename()));
        return ResponseEntity.ok().build();
    }


    @GetMapping("/fileUpload")
    public String upload() {
        return "upload";
    }

    @PostMapping("/fileUpload")
    public String ParseCSV(@RequestParam("file") MultipartFile file, Model model) {

        // validate file
        if (file.isEmpty()) {
            model.addAttribute("message", "Please select a CSV file to upload.");
            model.addAttribute("status", false);
        } else {

            // parse CSV file to create a list of `User` objects
            try (Reader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {

                // create csv bean reader
                CsvToBean<CSVModel> csvToBean = new CsvToBeanBuilder(reader)
                        .withType(CSVModel.class)
                        .withIgnoreLeadingWhiteSpace(true)
                        .build();

                // convert `CsvToBean` object to list of users
                List<CSVModel> csvmodel = csvToBean.parse();

                // TODO: save users in DB?

                // save users list on model
                model.addAttribute("csvmodel", csvmodel);
                model.addAttribute("status", true);

            } catch (Exception ex) {
                model.addAttribute("message", "An error occurred while processing the CSV file.");
                model.addAttribute("status", false);
            }
        }
        return file.getName();
    }


    /**
     * Connect to the PostgreSQL database
     * @return a Connection object
     */
    public Connection connect() {
        String url = "dbc:postgresql://localhost:5432/postgresdb";
        String password = "root123";
        String user = "postgres";;
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the PostgreSQL server successfully.");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return connection;
    }

}


/*
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Bulk Creation of records from csv
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Customer.bulkCreate = (req_arr,result) =>{
  sql.query("INSERT INTO customers(id, level_col, cvss, title, vulnerability, solution, reference_col) VALUES ?", [req_arr], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, number_of_records: req_arr.length });
    result(null, {records:req_arr.length, status:'Sucess'});
  });
};
 */