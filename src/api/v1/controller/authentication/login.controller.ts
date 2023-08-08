import ILoginResponse from "../../interfaces/authentication/ILoginResponse";

/**
 * Login Controller
 * @param req
 * @returns IILoginResponse
 */

const loginController = (req: any): ILoginResponse => {
  const { user_name, password } = req.body;
  return {
    token: "dkfjsdlkj",
    user_info: {
      name: "Rohan",
      user_id: "w34",
      employee_id: "343434",
    },
  };
};

export default loginController;
