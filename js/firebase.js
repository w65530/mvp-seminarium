// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const getFirebaseData = (variable) => {
   return firebase
      .database()
      .ref()
      .child(variable)
      .get()
      .then((snapshot) => {
         if (snapshot.exists()) {
            return snapshot.val();
         } else {
            console.log('No data available');
         }
      })
      .catch((error) => {
         console.error(error);
      });
};

const sendFirebaseData = (variable, value) => {
   firebase.database().ref(variable).set(value);
};
