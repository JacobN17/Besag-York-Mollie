package fileUploadContoller;

import org.springframework.beans.factory.annotation.Autowired;
import repositoryexample.UserDTO;
import usermodelexample.UserModel;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.sql.*;
import java.util.List;
import java.util.logging.Logger;
import UserModelService.UserService;


@RestController
@Controller
public class FileUploadController {

/**
 * the controller class handles the uploading and parsing of a CSV file
 */

//@CrossOrigin("http://localhost:3000") // Allow requests from specific origins
//
    private static final Logger LOG = Logger.getLogger(String.valueOf(FileUploadController.class));
//
//    //Issue Getting Autowired to work
//    @Autowired
//    DocumentService documentService;
//
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

//Calls the USERDTO class to create an object
    @Autowired
    private UserService use;
// uses the feedUserData path to check if the Data is being inserted to the DB
// Calls ont he UserDTO object use to save the User Data
    @RequestMapping(path = "/feedUserData")
    public void setDataInDB(){
        use.saveUserData();
    }


    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/upload-csv-file")
    public String uploadCSVFile(@RequestParam("file") MultipartFile file, Model model) {

        // validate file
        if (file.isEmpty()) {
            model.addAttribute("message", "Please select a CSV file to upload.");
            model.addAttribute("status", false);
        } else {

            // parse CSV file to create a list of `User` objects
            try (Reader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {

                // create csv bean reader
                CsvToBean<UserModel> csvToBean = new CsvToBeanBuilder(reader)
                        .withType(UserModel.class)
                        .withIgnoreLeadingWhiteSpace(true)
                        .build();

                // convert `CsvToBean` object to list of users
                List<UserModel> users = csvToBean.parse();

                // TODO: save users in DB?

                // save users list on model
                model.addAttribute("users", users);
                model.addAttribute("status", true);

            } catch (Exception ex) {
                model.addAttribute("message", "An error occurred while processing the CSV file.");
                model.addAttribute("status", false);
            }
        }

        return "file-upload-status";
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    public void GetFile(@RequestParam("file") MultipartFile file) throws SQLException {
        System.out.println(file.getSize());
        Connection c = connect();
        Statement s = null;
        try {
            s = c.createStatement();
            ResultSet result = s.executeQuery("SELECT * FROM public.\"esri\"");
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