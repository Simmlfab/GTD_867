package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo,Long> {
    public List<ToDo> findByOwner(String owner);
   
    @Query("SELECT t FROM ToDo as t WHERE t.owner = ?1 AND t.archived = false ORDER by t.date asc")
    public List<ToDo> findAllButArchivedByOwner(String owner);

    /* @Query("SELECT t FROM ToDo as t WHERE t.owner = ?1 AND t.archived = false AND CAST(t.Date AS DATE)  = CURRENT_DATE() ORDER by t.date asc")
    public List<ToDo> findToDoToday(String owner); */

    @Query("SELECT t FROM ToDo as t WHERE t.owner = ?1 AND t.archived = true")
    public List<ToDo> findAllArchivedByOwner(String owner);
    
}