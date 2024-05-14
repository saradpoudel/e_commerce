import { API_URL } from "../constants";

async function SubmitAction(data) {
    const url = `${API_URL}api/auth/register`;
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

export default SubmitAction;