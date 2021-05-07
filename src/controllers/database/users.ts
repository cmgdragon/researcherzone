import { db_users } from '~/database_dev.ts';
import User from '~/models/User.ts';

export const addNewUser = async (user: User): Promise<any> => await db_users.insertOne(user);

export const findUserByEmail = async (param: any): Promise<any> => await db_users.findOne({email: param});

export const findUserById = async (_id): Promise<any> => await db_users.findOne({ _id });

const extractFields = (document: Object) => {
    const keys = Object.keys(document);
    const values = Object.values(document);
    const extracted = {};
    for (const keyIndex in keys) {
        if (keys[keyIndex] === '_id' || keys[keyIndex] === 'pwd') continue;
        extracted[keys[keyIndex]] = 
        Array.isArray(values[keyIndex]) ? [...values[keyIndex]] :
        typeof values[keyIndex] === 'object' ? {...values[keyIndex]} :
        values[keyIndex]
    }
    return extracted;
}

export const updateUser = async (email: any, user: User): Promise<any> => await db_users.updateOne(
    { email },
    { $set: extractFields(user) }
    /*{ $set: {
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
        social_media: [ ...user.social_media ]
    } }   */ 
);