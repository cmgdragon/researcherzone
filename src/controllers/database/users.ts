import { db_users } from '~/database_dev.ts';
import User from '~/models/User.ts';

export const addNewUser = async (user: User): Promise<any> => await db_users.insertOne(user);

export const findUser = async (param: any): Promise<any> => await db_users.findOne({email: param});

export const updateUser = async (email: any, user: User): Promise<any> => await db_users.updateOne(
    { email },
    { $set: {
        name: user.name,
        surname: user.surname,
        email: user.email,
        profile_slot_1: user.profile_slot_1,
        profile_slot_2: user.profile_slot_2,
        categories: [ ...user.categories ],
        image: user.image,
        optional_image: user.optional_image,
        people_following: [ ...user.people_followers ],
        people_followers: [ ...user.people_followers ],
        bibliographies: [ ...user.bibliographies ],
        social_media: [ ...user.social_media ]
    } }    
);