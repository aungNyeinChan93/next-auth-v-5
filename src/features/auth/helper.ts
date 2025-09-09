import { hash, genSalt, compare } from 'bcrypt-ts'


export async function hashPassword(password: string | number | undefined, salt: number = 10) {
    if (typeof password === 'number') {
        return await hash(password.toString(), await genSalt(salt || 10))
    }
    return await hash(password as string, await genSalt(salt || 10))
}

export async function isVerify(plainStr: string, hashStr: string) {
    return await compare(plainStr, hashStr);
}