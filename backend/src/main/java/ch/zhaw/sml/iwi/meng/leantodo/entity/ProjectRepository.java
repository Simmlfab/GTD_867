package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>
{
    public List<Project> findByOwner(String owner);

    @Query("SELECT p FROM Project p WHERE p.owner = ?1 AND p.id = ?2")
    public Project findProjectByIdAndOwner(String owner, Long id);
}