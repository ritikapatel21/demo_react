import { checkCookie } from "../helpers/cookie";
export default {
    session: !!checkCookie('jwt'),
    }