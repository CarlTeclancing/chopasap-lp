
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';
import { app } from './config';

const db = getFirestore(app)

/**
 * 
 * @param {string} collection - collection of app entities
 * @returns 
 */
export async function listAll(collectionName) {
    const col = collection(db, collectionName);
    const colSnapShot = await getDocs(col);
    const list = colSnapShot.docs.map(doc =>{return {id:doc.id, ...doc.data()}})
    return list;
}

export async function deleteDocument(collectionName, id) {
    await deleteDoc(doc (db, collectionName, id));
}