package com.mainapp.controller;

import com.mainapp.model.File;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

/**
 * the controller class handles the uploading and parsing of a CSV file
 */
@RestController
//@CrossOrigin("http://localhost:3000") // Allow requests from specific origins
public class FileController {
        @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
        public void GetFile(@RequestParam("file") MultipartFile file) {
            System.out.println(file.getSize());
        }
}



