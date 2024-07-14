
'use server'
import { signIn } from '@/app/auth'
export async function doNextLogin(formData) {


    const action = formData.get('action');
    await signIn(action, { redirectTo: "/home"});
    console.log(action);
}


export async function doNextlogout() {

}