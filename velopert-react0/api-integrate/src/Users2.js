// 'rfce'
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// Loading, success, error
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
        case 'SUCCESS':
        case 'ERROR' :
        default:
            return state;
    }
}

function Users() { 
    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
        } catch (e) {
            console.log(e.response.status);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러발생</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>Reload</button>
        </>                
    );
}

export default Users
