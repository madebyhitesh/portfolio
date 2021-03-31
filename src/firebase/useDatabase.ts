import { useState, useEffect } from "react"
import { projectFirestore } from "./config"

const useDatabase = (collection: any) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .onSnapshot((snap) => {
                let documents: any = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents)
            });

        return () => unsub();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { docs };
}

export default useDatabase;