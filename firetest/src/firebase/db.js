import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFBHUGWDxMf2n_lEDJYS091fA_dW9tWnc",
    authDomain: "tarefas-8293b.firebaseapp.com",
    projectId: "tarefas-8293b",
    storageBucket: "tarefas-8293b.firebasestorage.app",
    messagingSenderId: "817398233288",
    appId: "1:817398233288:web:236d944a1cefd9eccccdfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db,
    addDoc,
    collection
}