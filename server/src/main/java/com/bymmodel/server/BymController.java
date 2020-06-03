package com.bymmodel.server;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class BymController {
    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    public void GetFile(@RequestParam("file") MultipartFile file ) {
        System.out.println(file.getSize());
    }
}
