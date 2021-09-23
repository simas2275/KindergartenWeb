const { db, admin, auth, functions } = require("../utils/firebase");
exports.getPosts = async (req, res) => {
  const postsRef = await db.collection("post").get();
  let posts = [];
  postsRef.forEach((doc) => posts.push(doc.data()));
  return res.json(posts);
};

exports.getInfo = async (req, res) => {
  const postsRef = await db.collection("info").get();
  let posts = [];
  postsRef.forEach((doc) => posts.push(doc.data()));
  return res.json(posts);
};



exports.updateUserInfo = async (req, res) => {
  const { userName } = req.body;
  const userId = req.user.uid;
  try {
    const updateUserRef = await db.collection("users").doc(userId);
    let data = {
      userName,
    };
    updateUserRef.update(data);
    res.status(200).send({
      status: "success",
      message: "data added successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.deleteUser = (req, res) => {
  admin.auth
    .deleteUser(uid)
    .then(() => {
      console.log("Successfully deleted user");
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
    });
};

// exports.allUsers = async (req, res) =>{
//   try {
//       let listUsers = await auth.listUsers()
//       // for (i = 0; i < listUsers.users.length; i++){
//       //   var obj = listUsers.users[i].email
//       //   console.log(obj)
//       // }
//       var obj = listUsers.users.map(emails => emails.email)
//       console.log(listUsers)
//       return res.status(200).send(obj)
//   } catch (err) {
//       return res.status(500).send({ message: `${err}`});
//   }
// }
exports.postData = async (req, res) => {
  const { title, text } = req.body;
  try {
    const dataRef = await db.collection("post").doc();
    let entryData = {
      id: new Date(),
      title,
      text,
    };
    dataRef.set(entryData);

    res.status(200).send({
      status: "success",
      message: "entry added successfully",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.postAtsiliepimus = async (req, res) => {
  const { atsiliepimas, name } = req.body;

  // const docId = req.params.id;
  const userId = req.user.uid;
  const userEmail = req.user.email;
  try {
    const dataRef = await db.collection("atsiliepimai").doc();
    let entryData = {
      time: new Date(),
      userId: userId,
      email: userEmail,
      documentId: dataRef.id,
      atsiliepimas,
      name,
    };
    dataRef.set(entryData);

    res.status(200).send({
      status: "success",
      message: "entry added successfully",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.postVizitoInfo = async (req, res) => {
  const {
    Vardas,
    Pavarde,
    TelefonoNr,
    ElPastas,
    DatePicker,
    VaikoDuom,
  } = req.body;

  try {
    const vizitoRef = await db.collection("vizitas").doc();
    let vizitoData = {
      time: admin.firestore.Timestamp.fromDate(new Date(DatePicker)),
      createdTime: new Date(),
      perziureta: false,
      vardas: Vardas,
      pavarde: Pavarde,
      telNr: TelefonoNr,
      elPastas: ElPastas,
      vaikoDuomenys: VaikoDuom,
      documentId: vizitoRef.id,
    };
    vizitoRef.set(vizitoData);
    res.status(200).send({
      status: "success",
      message: "entry added successfully",
      data: vizitoData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};



exports.postKlausimas = async (req, res) => {
  const { klausimas, anonymousEmail, perziureta } = req.body;
  try {
    const klausimoRef = await db.collection("klausimai").doc(anonymousEmail);
    let Data = {
      createTime: new Date(),
      klausimas,
      anonymousEmail,
      perziureta: false,
    };
    klausimoRef.set(Data);
    res.status(200).send({
      status: "success",
      message: "data added successfully",
      data: Data,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};


exports.postVaikoRez = async (req, res) => {
  const userId = req.user.uid;
  const {
    TevuVardas,
    TevuPavarde,
    TevuEmail,
    TevuTelNum,
    VaikoVardas,
    VaikoAmzius,
    AntrasVaikas,
    AntroVaikoVardas,
    AntroVaikoAmzius,
  } = req.body;
  // console.log(AntrasVaikas);
  if (AntrasVaikas === false) {
    try {
      const vaikoRezRef = await db.collection("vaikoRezervacija").doc(userId);
      let vaikoData = {
        createTime: new Date(),
        userId: userId,
        TevuVardas,
        TevuPavarde,
        TevuEmail,
        TevuTelNum,
        VaikoVardas,
        VaikoAmzius,
        AntrasVaikas,
        AdminConfirm: false,
      };
      if (!Number.isInteger(VaikoAmzius)) {
        res.status(500).json("Vaiko amzius turi buti sveikasis skaicius");
      } else if (VaikoAmzius > 3 || VaikoAmzius < 1) {
        res
          .status(500)
          .json(
            "Pirmos vaiko amzius negali buti didesnis nei 3 metai ir ne mazesnis nei 1 metai"
          );
      } else vaikoRezRef.set(vaikoData);

      const vaikoLankomumoRez = await db
        .collection("vaikoLankomumas")
        .doc(userId);

      let vaikoLankomumoData = {
        createTime: new Date(),
        userId: userId,
        Pirm_Pirmadienis: false,
        Pirm_Antradienis: false,
        Pirm_Treciadienis: false,
        Pirm_Ketvirtadienis: false,
        Pirm_Penktadienis: false,
        AntrasVaikas,
        TevuEmail,
      };
      vaikoLankomumoRez.set(vaikoLankomumoData);
      res.status(200).send({
        status: "success",
        message: "Duomenys ikelti vieno vaiko",
        data: vaikoData,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else if (AntrasVaikas === true) {
    try {
      const vaikoRezRef = await db.collection("vaikoRezervacija").doc(userId);
      let vaikoData = {
        createTime: new Date(),
        userId: userId,
        TevuVardas,
        TevuPavarde,
        TevuEmail,
        TevuTelNum,
        VaikoVardas,
        VaikoAmzius,
        AntrasVaikas,
        AntroVaikoVardas,
        AntroVaikoAmzius,
        AdminConfirm: false,
      };
      if (!Number.isInteger(AntroVaikoAmzius)) {
        res.status(500).json("Vaiko amzius turi buti sveikasis skaicius");
      } else if (AntroVaikoAmzius > 3 || AntroVaikoAmzius < 1) {
        res
          .status(500)
          .json(
            "Antro vaiko amzius negali buti didesnis nei 3 metai ir ne mazesnis nei 1 metai"
          );
      } else if (!Number.isInteger(TevuTelNum)) {
        res.status(500).json("Telefono numeris turi susideti tik is skaiciu");
      } else vaikoRezRef.set(vaikoData);

      const vaikoLankomumoRez = await db
        .collection("vaikoLankomumas")
        .doc(userId);

      let vaikoLankomumoData = {
        createTime: new Date(),
        userId: userId,
        Pirm_Pirmadienis: false,
        Pirm_Antradienis: false,
        Pirm_Treciadienis: false,
        Pirm_Ketvirtadienis: false,
        Pirm_Penktadienis: false,
        Antr_Pirmadienis: false,
        Antr_Antradienis: false,
        Antr_Treciadienis: false,
        Antr_Ketvirtadienis: false,
        Antr_Penktadienis: false,
        AntrasVaikas,
        TevuEmail,
      };
      vaikoLankomumoRez.set(vaikoLankomumoData);
      res.status(200).send({
        status: "success",
        message: "Duomenys ikelti dvieju vaiku",
        data: vaikoData,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

exports.updateVaikoLankomumaPirm = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Pirm_Pirmadienis: !updateRef.data().Pirm_Pirmadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaikoLankomumaAntr = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Pirm_Antradienis: !updateRef.data().Pirm_Antradienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaikoLankomumaTrec = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Pirm_Treciadienis: !updateRef.data().Pirm_Treciadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaikoLankomumaKetv = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Pirm_Ketvirtadienis: !updateRef.data().Pirm_Ketvirtadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaikoLankomumaPenkt = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Pirm_Penktadienis: !updateRef.data().Pirm_Penktadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.updateVaiko2LankomumaPirm = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Antr_Pirmadienis: !updateRef.data().Antr_Pirmadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaiko2LankomumaAntr = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Antr_Antradienis: !updateRef.data().Antr_Antradienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaiko2LankomumaTrec = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Antr_Treciadienis: !updateRef.data().Antr_Treciadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaiko2LankomumaKetv = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Antr_Ketvirtadienis: !updateRef.data().Antr_Ketvirtadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateVaiko2LankomumaPenkt = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db
    .collection("vaikoLankomumas")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      Antr_Penktadienis: !updateRef.data().Antr_Penktadienis,
    };
    updateRef.ref.update(entryData);
    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.getVaikoLankomumoDuom = async (req, res) => {
  const userId = req.user.uid;
  const vaikoDuomRef = await db
    .collection("vaikoLankomumas")
    .where("userId", "==", userId)
    .get();

  let vaikoDuom = [];

  vaikoDuomRef.forEach((doc) => vaikoDuom.push(doc.data()));
  let vaikoData = {
    vaikoDuom,
  };

  return res.json(vaikoData);
};

exports.getVaikoDuom = async (req, res) => {
  const userId = req.user.uid;
  const vaikoDuomRef = await db
    .collection("vaikoRezervacija")
    .where("userId", "==", userId)
    .get();

  let vaikoDuom = [];

  vaikoDuomRef.forEach((doc) => vaikoDuom.push(doc.data()));
  let vaikoData = {
    vaikoDuom,
  };

  return res.json(vaikoData);
};

exports.postVaikoMaistas = async (req, res) => {
  const userId = req.user.uid;
  const { maistoKoregavimas } = req.body;
  try {
    const maistoRef = await db.collection("vaikoRezervacija").doc(userId);
    const getMaistoRef = await db
      .collection("vaikoRezervacija")
      .doc(userId)
      .get();
    let Data = {
      maistoSukurimoData: new Date(),
      maistoKoregavimas,
    };
    if (getMaistoRef._fieldsProto.AdminConfirm.booleanValue === true) {
      maistoRef.update(Data);
      res.status(200).send({
        status: "success",
        message: "data added successfully",
        data: Data,
      });
    } else {
      res.status(403).json("Vaikas dar nepriimtas i darzeli");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// exports.postZinute = async (req, res) => {
//   const userId = req.user.uid;
//   const { zinute } = req.body;
//   const adminId = "EkK9USOqRLUeLyQ52qUgom7xSrf2"
//   try {
//     const zinutesRef = await db
//       .collection("Zinute")
//       .doc(userId)
//       .collection("Tekstas");
//     let data = {
//       createTime: new Date(),
//       zinute,
//       userId: userId,
//       adminId: adminId,
//     };
//     zinutesRef.add(data);
//     res.status(200).send({
//       status: "success",
//       message: "data added successfully",
//       data: data,
//     });
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

// exports.getZinutesDuom = async (req, res) => {
//   const userId = req.user.uid;
//   const adminId = "EkK9USOqRLUeLyQ52qUgom7xSrf2"
//   console.log(adminId)

//   try {
//     const zinutesDuomRef = await db
//       .collection("Zinute")
//       .doc(userId + adminId)
//       .collection("Tekstas")
//       .where("adminId", "==", adminId)
//       .get();

//     let zinutesDuom = [];

//     zinutesDuomRef.forEach((doc) => zinutesDuom.push(doc.data()));
//     let zinutesData = {
//       zinutesDuom,
//     };
//     res.json(zinutesData);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

exports.getNaujausiAtsiliepimai = async (req, res) => {
  const atsiliepimuRef = await db
    .collection("atsiliepimai")
    .orderBy("time", "desc")
    .limit(4)
    .get();

  let atsiliepimai = [];
  atsiliepimuRef.forEach((doc) => atsiliepimai.push(doc.data()));
  let data = {
    atsiliepimai,
  };
  return res.json(data);
};

exports.deleteKomentara = async (req, res) => {
  // const userId = req.user.uid;
  await db
    .collection("atsiliepimai")
    .doc(req.params.id)
    .delete()
    .then(() => {
      console.log(req.params.id);
      if (!req.params.id) {
        res.status(500).json(error.meesage);
      } else {
        res.status(200).json("Success");
        // res.status(200).send({
        //   status: "success",
        // });
      }
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });

  // const deleteRef =await db
  //   .collection("Atsiliepimai")
  //   .doc(req.params.id)
  //   .delete()
  //   .then(
  //     res.status(200).send({
  //       status: "duomenys istrinti",
  //     })
  //   ).catch((error) => alert(error));

  // .then(
  //   res.status(200).send({
  //     status: "duomenys istrinti",
  //   })
  // )
  // .catch((error) => alert(error.message));
};
