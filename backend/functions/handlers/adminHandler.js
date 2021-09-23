const { db, admin, auth, functions } = require("../utils/firebase");
exports.adminRoute = async (req, res) => {
  return res.json("Hey im admin");
};

exports.allUsers = async (req, res) => {
  try {
    let listUsers = await auth.listUsers();
    var obj = listUsers.users.map((emails) => emails.email);
    console.log(listUsers);
    return res.status(200).send(obj);
  } catch (err) {
    return res.status(500).send({ message: `${err}` });
  }
};

exports.updateInfoAdmin = async (req, res) => {
  const { Pavadinimas, Aprasymas } = req.body;
  if (Pavadinimas === undefined) {
    try {
      const updateRef = await db.collection("info").doc(req.params.id);
      let entryData = {
        Aprasymas: Aprasymas,
      };
      updateRef.update(entryData);
      res.status(200).send({
        status: "success",
        message: "Aprasymas atnaujintas",
        data: entryData,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else if (Aprasymas === undefined) {
    try {
      const updateRef = await db.collection("info").doc(req.params.id);
      let entryData = {
        Pavadinimas: Pavadinimas,
      };
      updateRef.update(entryData);
      res.status(200).send({
        status: "success",
        message: "Pavadinimas atnaujintas",
        data: entryData,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    try {
      const updateRef = await db.collection("info").doc(req.params.id);
      let entryData = {
        Pavadinimas: Pavadinimas,
        Aprasymas: Aprasymas,
      };
      updateRef.update(entryData);
      res.status(200).send({
        status: "success",
        message: "Duomenys atnaujinti",
        data: entryData,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

exports.postInfoAdmin = async (req, res) => {
  const { Aprasymas, Pavadinimas } = req.body;
  try {
    const dataRef = await db.collection("info").doc();
    let entryData = {
      createTime: new Date(),
      documentId: dataRef.id,
      Aprasymas: Aprasymas,
      Pavadinimas: Pavadinimas,
    };
    dataRef.set(entryData);

    res.status(200).send({
      status: "success",
      message: "Duomenys sekmingai prideti",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getKlausimusAdmin = async (req, res) => {
  const klausimoRef = await db
    .collection("klausimai")
    .where("perziureta", "==", true)
    .orderBy("createTime", "desc")
    .limit(10)
    .get();

  let objKlausimai = [];

  klausimoRef.forEach((doc) => objKlausimai.push(doc.data()));
  let klausimai = {
    objKlausimai,
  };

  return res.json(klausimai);
};

exports.getVaikoLankomumoDuomAdmin = async (req, res) => {
  const userId = req.user.uid;
  const vaikoDuomRef = await db.collection("vaikoLankomumas").get();

  let vaikoDuom = [];

  vaikoDuomRef.forEach((doc) => vaikoDuom.push(doc.data()));
  let vaikoData = {
    vaikoDuom,
  };

  return res.json(vaikoData);
};

exports.updateVizitoBusena = async (req, res) => {
  const userId = req.user.uid;
  const updateRef = await db.collection("vizitas").doc(req.params.id).delete();
  try {
    // let updateData = {
    //   perziureta: !updateRef.data().perziureta,
    // };
    // updateRef.ref.update(updateData);
    res.status(200).send({
      status: "success",
      // data: updateData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getVizitoInfo = async (req, res) => {
  const vizitoRef = await db.collection("vizitas").orderBy("time", "asc").get();

  let vizitai = [];

  vizitoRef.forEach((doc) => vizitai.push(doc.data()));

  let data = {
    vizitai,
  };
  return res.json(data);
};

exports.updateVaikoRezConfirm = async (req, res) => {
  const updateRef = await db
    // console.log(req.params)

    .collection("vaikoRezervacija")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      AdminConfirm: !updateRef.data().AdminConfirm,
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
exports.getVaikoRezDuomAdmin = async (req, res) => {
  const vaikoDuomRef = await db.collection("vaikoRezervacija").get();

  let vaikoDuom = [];

  vaikoDuomRef.forEach((doc) => vaikoDuom.push(doc.data()));
  let vaikoData = {
    vaikoDuom,
  };

  return res.json(vaikoData);
};

exports.getKlausimus = async (req, res) => {
  const klausimoRef = await db.collection("klausimai").get();

  let objKlausimai = [];

  klausimoRef.forEach((doc) => objKlausimai.push(doc.data()));
  let klausimai = {
    objKlausimai,
  };

  return res.json(klausimai);
};

exports.getAtsiliepimus = async (req, res) => {
  const userId = req.user.uid;
  const atsiliepimuRef = await db
    .collection("atsiliepimai")
    .where("userId", "==", userId)
    .get();

  let atsiliepimai = [];

  atsiliepimuRef.forEach((doc) => atsiliepimai.push(doc.data()));

  let duom = {
    atsiliepimai,
  };

  return res.json(duom);
};

exports.updateInfo = async (req, res) => {
  const { Pavadinimas, Aprasymas } = req.body;
  try {
    const updateRef = await db.collection("info").doc("BADVcpDtlinhwB6Dxz4l");
    let entryData = {
      Pavadinimas: Pavadinimas,
      Aprasymas: Aprasymas,
    };
    updateRef.update(entryData);

    res.status(200).send({
      status: "success",
      message: "entry updated",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateKlausima = async (req, res) => {
  const updateKlausimoRef = await db
    // console.log(req.params)
    .collection("klausimai")
    .doc(req.params.id)
    .get();
  try {
    let entryData = {
      perziureta: !updateKlausimoRef.data().perziureta,
    };
    updateKlausimoRef.ref.update(entryData);

    res.status(200).send({
      status: "success",
      data: entryData,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// exports.getAllUsers = async (req, res) =>{
//     try {
//         let listUsers = await auth.listUsers()
//         var obj = listUsers.users.map(emails => emails.email)
//         return res.status(200).send(obj)
//     } catch (err) {
//         return res.status(500).send({ message: `${err}`});
//     }
//   }
