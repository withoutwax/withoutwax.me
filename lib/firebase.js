import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: 'withoutwax-site'
    }),
    databaseURL: 'https://withoutwax-site.firebaseio.com'
  });
}

export default admin.database();
