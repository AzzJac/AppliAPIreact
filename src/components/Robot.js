function Robot({ user, onBack }) {
    function back() {
        onBack('listPage')
    }
    const robotStyle = {
        textAlign: 'center',
        padding: '20px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        backgroundColor: '#f8f8f8',
        maxWidth: '400px',
        margin: 'auto',
        marginTop: '50px',
    };

    const backButtonStyle = {
        backgroundColor: '#3498db',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={robotStyle}>
            <button style={backButtonStyle} onClick={back}>Back</button>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{user.username}</p>
            <p>{user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <img src={user.avatar} alt='user avatar' style={{ maxWidth: '100%', borderRadius: '50%', marginTop: '10px' }} />
        </div>
    );
}

export default Robot;