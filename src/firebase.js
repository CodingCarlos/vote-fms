import firebase from 'firebase/app';
import 'firebase/firestore';

// Setup
export const instance = firebase
  .initializeApp({
    projectId: 'vote-fms',
  });

// Get a Firestore instance
export const db = firebase.firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
// const { Timestamp, GeoPoint } = firebase.firestore;
// export { Timestamp, GeoPoint };
