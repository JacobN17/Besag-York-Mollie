package com.example.project.helper;

import com.example.project.model.Model;
import org.apache.commons.csv.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CsvHelper {

    public static String TYPE = "text/csv";
    static String[] HEADER = {"id", "Latitude", "Longitude"};

    public static boolean hasCSVFormat(MultipartFile file){
        if (!TYPE.equals(file.getContentType())) {
            return false;
        }
        return true;
    }

    public static List<Model> csvtoModel(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<Model> exampleModel = new ArrayList<Model>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                Model model = new Model(
                        Long.parseLong(csvRecord.get("Id")),
                        Float.parseFloat(csvRecord.get("Latitude")),
                        Float.parseFloat(csvRecord.get("Longitude"))
                );
                exampleModel.add(model);
            }

            return exampleModel;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }

    public static ByteArrayInputStream bymModelToCSV(List<Model> models) {
        final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
             CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
            for (Model model : models) {
                List<String> data = Arrays.asList(
                        String.valueOf(model.getId()),
                        String.valueOf(model.getLatitude()),
                        String.valueOf(model.getLongitude())
                );

                csvPrinter.printRecord(data);
            }
            csvPrinter.flush();
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
        }
    }
}
