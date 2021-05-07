import { sha256 } from 'sha256';

class User {
    name: string;
    surname: string;
    email: string;
    pwd: string;
    profile_slot_1: string = '';
    profile_slot_2: string = '';
    categories: Array<{id: number, category: string, category_order: number}> = [];
    image: any = '';
    optional_image: any = '';
    people_following: Array<string> = [];
    people_followers: Array<string> = [];
    social_media: Array<{name: string, url: string}> = [];

    constructor(user: {email: string, name: string, surname: string, pwd: string}) {
        this.email = user.email;
        this.name = user.name;
        this.surname = user.surname;
        this.pwd = sha256(user.pwd, "utf8", "hex") as string;
    }

}

export default User;