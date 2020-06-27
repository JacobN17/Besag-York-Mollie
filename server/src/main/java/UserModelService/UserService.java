package UserModelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositoryexample.UserDTO;
import usermodelexample.UserModel;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

@Service
public class UserService {

    @Autowired
    private UserDTO cdto;
    private String Line = "";

    public void saveUserData() {
        try{
            BufferedReader br = new BufferedReader(new FileReader("server/src/UserExample.csv"));
            while ((Line=br.readLine())!=null){
                String [] data = Line.split(",");
                UserModel use = new UserModel();
                use.firstname(data[0]);
                use.lastname(data[1]);
                use.age(data[2]);
                cdto.save(use);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
