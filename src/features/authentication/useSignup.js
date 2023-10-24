import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signUpUser({ email, password, fullName }),
    onSuccess: () => {
      navigate("/videos");
      toast.success(
        "Account Successfully Created, please verify the new account from the user's email address"
      );
    },
    onError: (error) => toast.error(error.message),
  });

  return { signUp, isLoading };
}
