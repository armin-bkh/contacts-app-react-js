import http from "./httpServices";

function getContact(id){
    return http.get(`/contacts/${id}`);
}

export default getContact