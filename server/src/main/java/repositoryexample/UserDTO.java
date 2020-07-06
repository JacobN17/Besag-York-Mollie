package repositoryexample;


import com.opencsv.CSVReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import usermodelexample.UserModel;


import java.io.*;
import java.util.Scanner;

@Repository
public interface  UserDTO extends JpaRepository<UserModel, Long> {

}



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


