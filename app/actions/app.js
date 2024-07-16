
'use server'
import { signIn,signOut } from '@/app/auth'

export async function doNextLogin(formData) {


    const action = formData.get('action');
    await signIn(action, { redirectTo: "/home"});
   
}

export async function doCredentialLogin(formData) {
   console.log("formdata",formData);

   try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
    
}

export async function doNextlogout() {
    await signOut({ redirectTo: "/" });

}