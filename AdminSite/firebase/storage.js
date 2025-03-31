import {getStorage, getDownloadURL, ref} from "firebase/storage"
import { app } from "./config"

const storage = getStorage(app)

export async function getPreviewImageLink(id){
 return await getDownloadURL(ref(storage, id))
}