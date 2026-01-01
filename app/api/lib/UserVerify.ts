import {cookies} from "next/headers";
import jwt from "jsonwebtoken";


const secret = process.env.JWT_SECRET as string
interface MyJwtPayload extends jwt.JwtPayload {
    _id: string
}

export async function UserVerify() {
    const headersCookie = cookies();
    const token = (await headersCookie).get("auth_token")?.value;
    if (!token) {
        return false;
    }
    const decodedToken = jwt.verify(token as string, secret) as MyJwtPayload;
    return decodedToken;
}