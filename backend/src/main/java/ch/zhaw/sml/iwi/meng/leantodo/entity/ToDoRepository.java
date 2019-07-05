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

    /* @Query("SELECT t FROM ToDo as t WHERE t.owner = ?1 AND t.archived = false AND CAST(Date AS DATE) = CURRENT_DATE() ORDER by TO_DO.DATE asc")
    public List<ToDo> findTodayToDo(String owner); */

    /* SELECT * FROM PROJECT_TO_DOS JOIN TO_DO WHERE PROJECT_TO_DOS.TO_DOS_ID != TO_DO.ID; */
    /* @Query("SELECT t FROM Project p LEFT JOIN p.toDos t WHERE t != null") */
    @Query("SELECT t FROM ToDo as t WHERE t.owner = ?1 AND t.archived = false AND CAST(t.Date AS DATE)  = CURRENT_DATE() ORDER by t.date asc")
    public List<ToDo> findToDoToday(String owner);

    /* @Query("SELECT * FROM PROJECT_TO_DOS LEFT JOIN TO_DO WHERE PROJECT_TO_DOS.TO_DOS_ID != TO_DO.ID AND TO_DO.archived = false")
    public List<ToDo> findAllToDosWithoutAProject(String owner); */

    @Query("SELECT t FROM ToDo as t WHERE t.owner = ?1 AND t.archived = true")
    public List<ToDo> findAllArchivedByOwner(String owner);
    
}