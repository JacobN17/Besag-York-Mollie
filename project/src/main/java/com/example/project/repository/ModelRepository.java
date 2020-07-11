package com.example.project.repository;

import com.example.project.model.Model;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ModelRepository extends JpaRepository <Model, Long>{
}

//public interface ModelRepository extends CrudRepository<Model, Long> {
//}
