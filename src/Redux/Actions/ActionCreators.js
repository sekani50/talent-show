// Action Creators
import * as type from "./Types";
import axios from "../../Utils/useAxios";
import toast from "react-hot-toast";

const GetUsersSuccess = (data) => {
  return {
    type: type.FETCH_USER_SUCCESS,
    payload: data,
  };
};

const loginSuccess = (data) => {
  return {
    type: type.LOGIN_SUCCESS,
    payload: data,
  };
};
const logout = () => {
  return {
    type: type.LOGOUT,
  };
};





const LoginAction = (loginParams, navigate, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    await axios
      .post("/auth/login", loginParams)
      .then(async (res) => {
        console.log(res.data);
        //navigate("/");
        
        const { accessToken, user } = res.data.data;
        dispatch(GetUsersSuccess(user));
        dispatch(loginSuccess(accessToken.token));
        if (user.isOnboard) {
          navigate("/");
        }
        else {
          navigate("/onboarding");
        }
        
        //console.log(admin);
        setLoading(false);
        toast.success("Login successful");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        if (
          error.message === "Network Error" ||
          error.message === "timeout exceeded"
        ) {
          toast.error("Network Error");
        }
        const {error:err} = error.response.data
        if(typeof err === "string") {
          toast.error(err.message)
        }
        const { message } = error.response.data.error;
        if (message) {
          toast.error(message);
        }
        const { message: mm } = error.response.data;
        if (mm) {
          toast.error(mm);
        }
      });
  };
};

const registration = (registrationParams, navigate, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    await axios
      .post("/auth/signup", registrationParams, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);

        dispatch(GetUsersSuccess(res.data.data));
        dispatch(loginSuccess(res.data.data.token));
        toast.success(res.data.message);
        navigate("/login");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.message === "Network Error" ||
          error.message === "timeout exceeded"
        ) {
          toast.error("Network Error");
        }
        console.log(error.response.data);
        const {error:err} = error.response.data
        if(err) {
          toast.error(Object.values(err))
        }
        const { message } = error.response.data.error;
        if (message) {
          toast.error(message);
        }
        const { message: mm } = error.response.data.response;
        if (mm) {
          toast.error(mm);
        }

        //console.log(error.response.data.error.message);
      });
  };
};

export {
  LoginAction,
  registration,
  loginSuccess,
  GetUsersSuccess,
  logout,
  
};
