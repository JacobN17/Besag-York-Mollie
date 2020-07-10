package com.bymmodel.server.constroller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
}
