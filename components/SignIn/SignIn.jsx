import React from 'react';

const SignIn = ({closeModal}) => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <div onClick={closeModal} className='z-[30] fixed inset-0 bg-slate-800/75'></div>
            <div className="fixed z-[40] top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="modal-content">
                <h2>Connexion</h2>
                <label>{`Nom d'utilisateur`}:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Mot de passe:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button >Se connecter</button>
            </div>
            </div>
            {/* commentaire */}
            {/* commentaire */}
            {/* commentaire */}
            {/* commentaire */}
            {/* commentaire */}
            {/* commentaire */}
            {/* commentaire */}
        </>
    );
};

export default SignIn;