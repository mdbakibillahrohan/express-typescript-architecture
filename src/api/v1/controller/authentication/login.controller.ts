import ErrorResponse from "../../interfaces/ErrorResponse";
import ILoginResponse from "../../interfaces/authentication/ILoginResponse";
import Loginservices from "../../services/authentication/login.services";

/**
 * Login Controller
 * @param req
 * @returns IILoginResponse
 */

const LoginController = async (
  req: any
): Promise<ILoginResponse | ErrorResponse> => {
  const loginServices: any = await Loginservices(req.body);
  return {
    token: "dkfjsdlkj",
    user_info: {
      name: loginServices[0].FullName,
      user_id: "w34",
      employee_id: "343434",
    },
  };
};

export default LoginController;
