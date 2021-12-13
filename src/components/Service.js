import axios from "@/axios";

export async function getUserList() {

    const response = await axios
        .get(`/sign-up`)
    return response.data.users;

}

export async function userPost(rcv_data) {
    const response = await axios
        .post(`/sign-up/`, rcv_data)
    return response.data;

}
export async function getUserData(id, rcv_data) {
    const response = await axios
        .get(`/sign-up/${id}/`, rcv_data)
    return response.data.user;

}

export async function userUpdate(id, rcv_data) {
    const response = await axios
        .put(`/sign-up/${id}`, rcv_data)
    return response.data;

}
export async function userDelete(id) {
    const response = await axios
        .delete(`/sign-up/${id}`)
    return response.data;

}