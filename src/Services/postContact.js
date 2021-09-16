import http from "./httpServices";

function postContact(value) {
    return http.post("/contacts", value);
}

export default postContact;