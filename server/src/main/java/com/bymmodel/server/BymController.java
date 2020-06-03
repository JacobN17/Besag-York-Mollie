package com.bymmodel.server;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


//@CrossOrigin("*")
@RestController
public class BymController {
//
//    private static final Logger logger = LoggerFactory.getLogger(BymController.class);
//
//    @PostMapping(value = "upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity GetFile(@RequestParam MultipartFile file) {
//        logger.info(String.format("File name '%s' uploaded successfully.", file.getOriginalFilename()));
//        return ResponseEntity.ok().build();
//    }
    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    public void GetFile(@RequestParam("file") MultipartFile file ) {
        System.out.println(file.getSize());
    }
}


/*
    @CrossOrigin("*")
@RestController
public class FileController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadFile(@RequestParam MultipartFile file) {
        logger.info(String.format("File name '%s' uploaded successfully.", file.getOriginalFilename()));
        return ResponseEntity.ok().build();
    }
}


    @RequestMapping(value = "/upload-files", headers = "content-type=multipart/*", method = RequestMethod.POST)
    public void upload(@RequestParam(value = "file0", required = true) MultipartFile multipartFile, Integer adminOid) throws IOException {
        //do something with the multipartFile


           onDrop(accepted, rejected) {
        if (rejected.length) {
            //do something with rejected files
        } else {
            let data = new FormData();
            for (let i = 0; i < this.state.files.length; i++) {
                let file = accepted[i];
                data.append("file" + i, file, file.name);
            }
            const config = {
                headers: { 'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p' }
            };
            axios.post("upload-files", data, config);
        }
    };
}
 */