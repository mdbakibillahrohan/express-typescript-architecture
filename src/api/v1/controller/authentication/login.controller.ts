/**
 * Login Controller
 * @param req
 * @returns IILoginResponse
 */

import Loginservices from "../../services/authentication/login.services";

const LoginController = async (req: any, res: any) => {
  try {
    const loginServices: any = await Loginservices(req.body);
    return res.send({
      name: "Rohan",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
};

export default LoginController;
