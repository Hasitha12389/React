import React from 'react';

const UserProfile = ({ name, age, email }) => {
    return (
        <div className = "user-profile">
            <h2>User Profile</h2>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Age:</strong>{age}</p>
            <p><strong>Email:</strong>{email}</p>
        </div>
    );
};

export default UserProfile;

/* CSS
.user-profile {
 display: inline-block;
 text-align: left; 
 margin: 20px auto;
 padding: 20px;
 border:  1px solid #ccc;
 border-radius: 8px;
 background-color: #f9f9f9;
}

.user-profile h2 {
  margin-bottom: 10px;
}
.user-profile p {
    margin: 5px 0;
  }
 */

//component call in App.js <UserProfile name={ user.name} age={user.age} email={ user.email}/>