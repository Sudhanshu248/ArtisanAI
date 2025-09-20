import axios from 'axios';
import { BASE_URL } from '../../../axiosConfig.js';
import React, { useState, useEffect } from 'react';

export default function Hero() {

    const [username, setUsername] = useState("");

    const getUsername = async () => { 
        try {
            let request = await axios.get(`${BASE_URL}/get_username`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            console.log(request.data);
            setUsername(request.data.username);

        } catch (err) {
            throw err;
        }
    }

    useEffect(() => { 
        getUsername();
    }, []);

    return (
        <>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-8">
                <h2 className="text-3xl font-bold mb-4">Welcome back, {username}!</h2>
                <p className="text-purple-100 text-lg">
                    Ready to create stunning marketing content for your handmade products?
                </p>
            </div>
        </>
    );
}