import http from "./httpServices";

function deleteContact(id){
    return http.delete(`/contacts/${id}`)
}

export default deleteContact;