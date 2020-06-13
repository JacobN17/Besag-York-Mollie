//package com.bymmodel;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.xml.transform.Result;
//import java.io.IOException;
//import java.sql.*;
//import java.util.Arrays;
//import java.util.List;
//import java.util.logging.Logger;
//
//@RestController
//
//public class FileUploadController {
//
///**
// * the controller class handles the uploading and parsing of a CSV file
// */
//
////@CrossOrigin("http://localhost:3000") // Allow requests from specific origins
//
//    private static final Logger LOG = Logger.getLogger(String.valueOf(FileUploadController.class));
//
//    //Issue Getting Autowired to work
////    @Autowired
////    DocumentService documentService;
//
//    //Establishes connection to database
//    private Connection connect() {
//        Connection c = null;
//        Statement stmt = null;
//        try {
//            Class.forName("org.postgresql.Driver");
//            c = DriverManager
//                    .getConnection("jdbc:postgresql://localhost:5432/esri",
//                            "postgres", "Iamrigo27");
//            System.out.println("Opened database successfully");
//        } catch (Exception e) {
//            System.err.println(e.getClass().getName() + ": " + e.getMessage());
//        }
//        return c;
//    }
//
//    @RequestMapping(value = "/upload", method = RequestMethod.POST)
//    public @ResponseBody
//    ResponseMetadata handleFileUpload(@RequestParam(value="file") MultipartFile file) throws IOException {
//        return documentService.save(file);
//    }
//
//    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public HttpEntity getDocument(@PathVariable Long id) {
//        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.setContentType(MediaType.IMAGE_JPEG);
//        return new ResponseEntity(documentService.getDocumentFile(id), httpHeaders, HttpStatus.OK);
//    }
//
//    @RequestMapping(method = RequestMethod.GET)
//    public @ResponseBody List getDocument() {
//        return documentService.findAll();
//    }
//
//}