
'use server'
import { signIn,signOut } from '@/app/auth'

export async function doNextLogin(formData) {


    const action = formData.get('action');
    await signIn(action, { redirectTo: "/home"});
   
}


export async function doNextlogout() {
    await signOut({ redirectTo: "/" });

}