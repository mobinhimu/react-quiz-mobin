import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      toast.success("User Logged in Successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { login, isLoading };
}
