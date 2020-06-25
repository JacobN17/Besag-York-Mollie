package repositoryexample;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import usermodelexample.UserModel;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

@Repository
public abstract class UserDTO implements CrudRepository<UserModel, Integer> {

    @Autowired
    private UserDTO cdto;
    private String Line = "";


    public void saveUserData() {
        try{
            BufferedReader br = new BufferedReader(new FileReader("File path"));
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
