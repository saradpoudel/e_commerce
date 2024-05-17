import React, { useState, useEffect } from 'react';

function UserDetails() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/auth/user-details')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div>
            <h1>User Details</h1>
            <ul>
                {users.map(user => (
                    <React.Fragment key={user.id} className="">
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}
export default UserDetails;