'use server'

// login with credentail
export async function loginWithCredential(initialState: any, formdata: FormData) {
    const email = formdata.get('email') as string;
    const password = formdata.get('password') as string;
    console.log({ email, password });

    return
}