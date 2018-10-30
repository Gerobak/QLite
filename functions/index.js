const functions = require("firebase-functions");
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://quartzlite-ee5f4.firebaseio.com/"
});

exports.loginAuth = functions.https.onRequest((request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  const db = admin.database();

  if (email === "heru@heru.com" && password === "123123") {
    const ref = db.ref("user/0");
    ref.once("value", data => {
      response.status(200);
      response.json(data);
    });

    response.status(200);
  } else if (email === "" && password === "") {
    response.status(401);
    response.json({
      errorMessage: "enter email and password "
    });
  } else {
    response.status(404);
    response.json({
      errorMessage: "Incorrect email or password"
    });
  }
});
