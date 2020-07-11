package com.example.project.service;

import com.example.project.helper.CsvHelper;
import com.example.project.model.Model;
import com.example.project.repository.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@Service
public class CSVService {
    @Autowired
    ModelRepository repository;

    public void save(MultipartFile file) {
        try {
            List<Model> model = CsvHelper.csvtoModel(file.getInputStream());
            repository.saveAll(model);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public ByteArrayInputStream load() {
        List<Model> models = repository.findAll();

        ByteArrayInputStream in = CsvHelper.usermodelToCSV(models);
        return in;
    }

    public List<Model> getAllTutorials() {
        return repository.findAll();
    }


}
