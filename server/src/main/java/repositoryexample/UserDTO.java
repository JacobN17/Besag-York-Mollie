package repositoryexample;


import com.opencsv.CSVReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import usermodelexample.UserModel;


import java.io.*;
import java.util.Scanner;

@Repository
public interface  UserDTO extends CrudRepository<UserModel, Integer> {

}
//
//    @Autowired
//    private UserDTO cdto;
//    private String Line = "";


//    public void saveUserData() throws FileNotFoundException{
//        //Get scanner instance
//        Scanner scanner = new Scanner(new File("server/src/UserExample.csv"));
//
//        //Set the delimiter used in file
//        scanner.useDelimiter(",");
//
//        //Get all tokens and store them in some data structure
//        //I am just printing them
//        while (scanner.hasNext())
//        {
//            System.out.print(scanner.next() + "|");
//        }
//
//        //Do not forget to close the scanner
//        scanner.close();
//    }
//
//    }


//    public void saveUserData() {
//        try{
//            BufferedReader br = new BufferedReader(new FileReader("server/src/UserExample.csv"));
//            while ((Line=br.readLine())!=null){
//                String [] data = Line.split(",");
//                UserModel use = new UserModel();
//                use.firstname(data[0]);
//                use.lastname(data[1]);
//                use.age(data[2]);
//                cdto.save(use);
//            }
//        } catch (FileNotFoundException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }


