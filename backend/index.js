const xsjs = require("@sap/xsjs");
const xsenv = require("@sap/xsenv");
const xssec = require("@sap/xssec");
const passport = require("passport");
const JWTStrategy = require("@sap/xssec").JWTStrategy;
const express = require("express");

if (process.env.VCAP_SERVICES) {
  hanaCredentials = process.env.VCAP_SERVICES.hana[0].credentials;
} else {
  hanaCredentials = require("./default-env.json").VCAP_SERVICES.hana[0]
    .credentials;
}

const app = express();
const port = process.env.PORT || 4000;

app.use(passport.initialize());
app.use(
  passport.authenticate("JWT", {
    session: false,
  })
);

passport.use(
  "JWT",
  new xssec.JWTStrategy(
    xsenv.getServices({
      uaa: {
        tag: "xsuaa",
      },
    }).uaa
  )
);

app.get("/", (req, res) => {
  console.log(req.user);
  res.json({ isWorking: true });
});

app.get("/currentUser", (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

let options = {
  //anonymous: true, // remove to authenticate calls
  auditLog: { logToConsole: true }, // change to auditlog service for producteve scenarios
  redirectUrl: "/index.xsjs",
};

// configure UAA
try {
  options = Object.assign(
    options,
    xsenv.getServices({ uaa: { tag: "reactrouter-uaa" } })
  );
} catch (err) {
  console.log("[ERROR]", err.message);
}

app.use(xsjs(options));

// start server
app.listen(port, () => console.log(`Listening on port ${port}`));
