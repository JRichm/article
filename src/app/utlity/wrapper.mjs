import 'dotenv/config';
import fetch from 'node-fetch';

const base = `https://api.clickup.com/api/v2`;

class Session {
    constructor() {
        this.headers = {
            Authorization: process.env.CLICKUP_KEY,
            'Content-Type': 'application/json',
        };
    }

    async get(endpoint) {
        const url = `${base}/${endpoint}`
        console.log(url)
        console.log(this.headers)
        const res = await fetch(url, { method: "GET", headers: this.headers})

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json();
        console.log(data)
        return data
    }
}

export default Session;

// https://api/clickup.com/api/v2/list/901404484512/
// https://api.clickup.com/api/v2/list/901404484512