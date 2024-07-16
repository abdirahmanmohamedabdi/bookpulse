import React from 'react';
import { auth } from '../auth';
import { redirect } from 'next/navigation';
import Logout from '../components/Logout';
import navUser from '../components/navuser';

const Homepage = async () => {
    const session = await auth();

    console.log('Session:', session); // Log the session object

    if (!session || !session.user) {
        redirect('/home');
        return null; // Ensure the component does not render further after redirect
    }

    return (
       
        <div className="flex flex-col items-center m-4">
            
            <h1 className="text-3xl my-2">Welcome, {session.user.name}</h1>
            <img
                src={session.user.image}
                alt={session.user.name}
                className="rounded-full"
            />
            <Logout />
        </div>
    );
};

export default Homepage;
