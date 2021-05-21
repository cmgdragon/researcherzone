import { db_documents } from '~/database.ts';
//import { db_documents } from '~/database_dev.ts';

export const addNewDocument = async (document: any): Promise<any> => await db_documents.insertOne(document);

export const deleteDocument = async (_id: any, user: any): Promise<any> => await db_documents.deleteOne({ _id, user });

export const deleteCategory = async (category: any, user: any): Promise<any> => 
    await db_documents.deleteMany({ category, user });

export const findDocument = async (_id: any): Promise<any> => 
    await db_documents.findOne({ _id },  { noCursorTimeout: false } as any);

export const findDocuments = async (user: string) => 
    await db_documents.find({ user },  { noCursorTimeout: false } as any).toArray();

const extractFields = (document: Object) => {
    const keys = Object.keys(document);
    const values = Object.values(document);
    const extracted = {};
    for (const keyIndex in keys) {
        if (keys[keyIndex] === '_id') continue;
        extracted[keys[keyIndex]] = 
        Array.isArray(values[keyIndex]) ? [...values[keyIndex]] :
        typeof values[keyIndex] === 'object' ? {...values[keyIndex]} :
        values[keyIndex]
    }
    return extracted;
}

export const updateDocument = async (_id: any, document: any, user: any): Promise<any> => await db_documents.updateOne(
    { _id, user },
        { $set: extractFields(document) }    
);