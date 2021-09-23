const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
const { admin } = require("./utils/firebase");
const adminMiddleware = require("./middleware/adminMiddleware");
const {
  adminRoute,
  updateInfoAdmin,
  postInfoAdmin,
  getKlausimusAdmin,
  getVaikoLankomumoDuomAdmin,
  allUsers,
  getVizitoInfo,
  updateVaikoRezConfirm,
  getVaikoRezDuomAdmin,
  updateVizitoBusena,
  getKlausimus,
  getAtsiliepimus,
  updateInfo,
  updateKlausima,
} = require("./handlers/adminHandler");
const {
  postKlausimas,
  deleteUser,
  postAtsiliepimus,
  postData,
  getInfo,
  getPosts,
  postVaikoRez,
  getVaikoDuom,
  postVaikoMaistas,
  getNaujausiAtsiliepimai,
  updateUserInfo,
  deleteKomentara,
  getVaikoLankomumoDuom,
  updateVaikoLankomumaPirm,
  updateVaikoLankomumaAntr,
  updateVaikoLankomumaTrec,
  updateVaikoLankomumaKetv,
  updateVaikoLankomumaPenkt,
  updateVaiko2LankomumaPirm,
  updateVaiko2LankomumaAntr,
  updateVaiko2LankomumaTrec,
  updateVaiko2LankomumaKetv,
  updateVaiko2LankomumaPenkt,
  postVizitoInfo,
} = require("./handlers/postsHandler");
const { auth } = require("firebase-admin");

app.use(cors());

app.post("/post", authMiddleware, postData);
// app.delete("/delete:uid", deleteUser);
app.get("/posts", authMiddleware, getPosts);




// Anonymous users METHODS
app.post("/postKomentaras", postKlausimas);
app.get("/info", getInfo);
app.get("/klausimai/desc", getNaujausiAtsiliepimai);
app.post("/postVizitoInfo", postVizitoInfo);


// USER METHODS
app.post("/postVaikoRez", authMiddleware, postVaikoRez);
app.post("/atsliepimoPost", authMiddleware, postAtsiliepimus);
app.get("/getVaikoDuom", authMiddleware, getVaikoDuom);
app.post("/postVaikoMaistas", authMiddleware, postVaikoMaistas);
app.put("/updateUserInfo", authMiddleware, updateUserInfo);
app.get("/getVaikoLankomumoDuom", authMiddleware, getVaikoLankomumoDuom);
app.delete("/deleteKomentara/:id", authMiddleware, deleteKomentara);

//update 1 vaiko lankomuma
app.get("/updateVaikoLankomuma1/:id", authMiddleware, updateVaikoLankomumaPirm);
app.get("/updateVaikoLankomuma2/:id", authMiddleware, updateVaikoLankomumaAntr);
app.get("/updateVaikoLankomuma3/:id", authMiddleware, updateVaikoLankomumaTrec);
app.get("/updateVaikoLankomuma4/:id", authMiddleware, updateVaikoLankomumaKetv);
app.get("/updateVaikoLankomuma5/:id",authMiddleware,updateVaikoLankomumaPenkt);
//update 2 vaiko lankomuma
app.get("/updateVaiko2Lankomuma1/:id",authMiddleware,updateVaiko2LankomumaPirm);
app.get("/updateVaiko2Lankomuma2/:id",authMiddleware,updateVaiko2LankomumaAntr);
app.get("/updateVaiko2Lankomuma3/:id",authMiddleware,updateVaiko2LankomumaTrec);
app.get("/updateVaiko2Lankomuma4/:id",authMiddleware,updateVaiko2LankomumaKetv);
app.get("/updateVaiko2Lankomuma5/:id",authMiddleware,updateVaiko2LankomumaPenkt);


//ADMIN method
app.get("/getKlausimai", authMiddleware, adminMiddleware, getKlausimus);
app.get("/admin", authMiddleware, adminMiddleware, adminRoute);
app.get("/atsiliepimaiGet", authMiddleware, getAtsiliepimus);
app.put("/upInfo", authMiddleware, adminMiddleware, updateInfo);
app.get("/updateKlausima/:id", authMiddleware, adminMiddleware, updateKlausima);
app.get("/getVaikoRezDuom",authMiddleware,adminMiddleware,getVaikoRezDuomAdmin);
app.get("/atnaujiname/:id",authMiddleware,adminMiddleware,updateVaikoRezConfirm);
app.get("/user", authMiddleware, adminMiddleware, allUsers);
app.get("/getVizitoInfo", authMiddleware, adminMiddleware, getVizitoInfo);
app.get("/getVaikoLankomumoDuomAdmin",authMiddleware,adminMiddleware,getVaikoLankomumoDuomAdmin);
app.put("/updateInfoAdmin/:id",authMiddleware,adminMiddleware,updateInfoAdmin);
app.post("/postInfoAdmin", authMiddleware, adminMiddleware, postInfoAdmin);
app.get("/getKlausimusAdmin",authMiddleware,adminMiddleware,getKlausimusAdmin);
app.delete("/updateVizitoBusena/:id", authMiddleware,adminMiddleware,updateVizitoBusena)


// TRIGGERS

// Set admin to true
exports.makeAdmin = functions.auth.user().onCreate(async (user) => {
  if (user.email === "adminas@gmail.com") {
    const customClaims = { admin: true };
    return await admin.auth().setCustomUserClaims(user.uid, customClaims);
  }
});

//Save user/admin data in firestore DB
exports.userInfoFirestore = functions.auth.user().onCreate(async (user) => {
  const email = user.email;
  const userId = user.uid;
  const body = {
    userId,
    email: email,
    admin: false,
    createTime: new Date(),
  };
  const adminBody = {
    userId,
    email: email,
    admin: true,
    createTime: new Date(),
  };
  if (user.email === "adminas@gmail.com") {
    return await admin
      .firestore()
      .collection("adminas")
      .doc(userId)
      .set(adminBody);
  } else {
    return await admin.firestore().collection("users").doc(userId).set(body);
  }
});

exports.api = functions.https.onRequest(app);
