package com.bymmodel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.Document;
import java.io.IOException;
import java.util.List;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    private DocumentDao documentDao;

    @Override
    public ResponseMetadata save(MultipartFile file) throws IOException {

        Document doc = new Document();
        doc.setDocName(file.getOriginalFilename());
        doc.setFile(file.getBytes());
        documentDao.save(doc);
        ResponseMetadata metadata = new ResponseMetadata();
        metadata.setMessage("success");
        metadata.setStatus(200);
        return metadata;
    }

    @Override
    public byte[] getDocumentFile(Long id) {
        return documentDao.findOne(id).getFile();
    }

    @Override
    public List findAll() {
        return (List) documentDao.findAll();
    }

}