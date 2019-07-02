package ch.zhaw.sml.iwi.meng.leantodo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

/**
 * ToDo
 */
@Entity
@Data
public class ToDo {
    
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private boolean archived = false;
    private boolean done = false;
    
    @Temporal(TemporalType.TIMESTAMP) 
    private Date doneDate;



    @JsonIgnore
    private String owner;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the archived
     */
    public boolean isArchived() {
        return archived;
    }

    /**
     * @param archived the archived to set
     */
    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    /**
     * @return the done
     */
    public boolean isDone() {
        return done;
    }

    /**
     * @param done the done to set
     */
    public void setDone(boolean done) {
        this.done = done;
    }

    /**
     * @return the owner
     */
    public String getOwner() {
        return owner;
    }

    /**
     * @param owner the owner to set
     */
    public void setOwner(String owner) {
        this.owner = owner;
    }

    /**
     * @return the doneDate
     */
    public Date getDoneDate() {
        return doneDate;
    }

    /**
     * @param doneDate the doneDate to set
     */
    public void setDoneDate(Date doneDate) {
        this.doneDate = doneDate;
    }
    
}