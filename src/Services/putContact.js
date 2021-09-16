import http from "./httpServices";

function putContact(id, value){
    return http.put(`contacts/${id}`, value)
}

export default putContact;