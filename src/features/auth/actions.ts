'use server'

// login with credentail
export async function loginWithCredential(initialState: any, formdata: FormData) {
    const name = formdata.get('name') as string;
    const email = formdata.get('email') as string;
    const password = formdata.get('password') as string;
    console.log({ email, password, name });

    return
}