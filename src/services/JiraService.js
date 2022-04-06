import Axios from "axios"
import { DOMAIN_JIRA, TOKEN } from "../util/constants/settingSystem"

export const jiraService = {
    signinJira: (userLogin) =>{
        return Axios({
            url:`${DOMAIN_JIRA}/users/signin`,
            method:'POST',
            data: userLogin
        }) 
    },
    getAllProjectCategory: () =>{
        return Axios({
            url:`${DOMAIN_JIRA}/ProjectCategory`,
            method:'GET'
        }) 
    },
    createProject: (newProject) =>{
        return Axios({
            url:`${DOMAIN_JIRA}/Project/createProject`,
            method:'POST',
            data: newProject
        }) 
    },
    createProjectAuthorization : (newProject) => {
        console.log(localStorage.getItem(TOKEN))
        return Axios({
            url: `${DOMAIN_JIRA}/Project/createProjectAuthorize`,
            method:'POST',
            data:newProject,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT 
        })
    },
    getListProject: () => {
        return Axios({
            url:`${DOMAIN_JIRA}/Project/getAllProject`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    },
    updateProject: (projectUpdate) => { 
        return Axios({
            url:`${DOMAIN_JIRA}/Project/updateProject?projectId=${projectUpdate.id}`,
            method:'PUT',
            data:projectUpdate,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    },
    deleteProject: (projectId) => {
        return Axios({
            url:`${DOMAIN_JIRA}/Project/deleteProject?projectId=${projectId}`,
            method:'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    getUser: (keyWord) => {
        return Axios({
            url:`${DOMAIN_JIRA}/Users/getUser?keyword=${keyWord}`, 
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    assignUserProject: (userProject) =>{   // add user to project trong pm
        return Axios({
            url:`${DOMAIN_JIRA}/Project/assignUserProject`,
            method:'POST',
            data: userProject,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    deleteUserFromProject: (userProject) => {
        return Axios({
            url:`${DOMAIN_JIRA}/Project/removeUserFromProject`,
            method:'POST',
            data: userProject,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    getProjectDetail: (projectId) => {
        return Axios({
            url:`${DOMAIN_JIRA}/Project/getProjectDetail?id=${projectId}`,
            method:'GET',
            data: projectId,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    getAllProject: () =>{
        return Axios({
            url:`${DOMAIN_JIRA}/Project/getAllProject`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        }) 
    },
    getAllTaskType: () => {
        return Axios({
            url:`${DOMAIN_JIRA}/TaskType/getAll`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    getAllPriority: () => {
        return Axios({
            url:`${DOMAIN_JIRA}/Priority/getAll`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    createTask: (taskObject) => {
        return Axios({
            url:`${DOMAIN_JIRA}/Project/createTask`,
            method:'POST',
            data: taskObject,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    getAllStatus: () => {
        return Axios({
            url:`${DOMAIN_JIRA}/Status/getAll`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    getUserByProjectId: (idProject) => {
        return Axios({
            url:`${DOMAIN_JIRA}/Users/getUserByProjectId?idProject=${idProject}`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    },
    getTaskDetail: (taskId) => {
        return Axios({
            url:`${DOMAIN_JIRA}/Project/getTaskDetail?taskId=${taskId}`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    }
}
