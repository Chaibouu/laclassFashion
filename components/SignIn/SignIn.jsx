import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SignIn = ({closeModal}) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div onClick={closeModal} className='z-[30] fixed inset-0 bg-slate-800/75'></div>
            <div className="fixed z-[40] top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/75 text-slate-900">
            <div className="modal-content">
                <Image src="/Logo/laclassFashionBlack.png" height={900} width={900} alt='Laclass Fashion Couture' />
                <h2>Connexion</h2>
                <div>
                    <label>{`Nom d'utilisateur`}</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div><Link href="/"></Link></div>
                <button >Se connecter</button>
            </div>
            </div>
        </>
    );
};

export default SignIn;