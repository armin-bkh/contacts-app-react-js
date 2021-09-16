import http from "./httpServices";

function getAllContacts(){
    return http.get("/contacts");
}

export default getAllContacts;