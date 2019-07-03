package ch.zhaw.sml.iwi.meng.leantodo.boundary;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.leantodo.controller.ToDoController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ToDo;

@RestController
public class ArchiveEndpoint {

    @Autowired
    private ToDoController toDoController;

    @RequestMapping(path = "/api/archived/todo", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<ToDo> getArchivedToDos(Principal principal) {
        return  toDoController.listAllArchivedToDos(principal.getName());        
    }
}