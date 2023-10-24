import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: logout,
    isLoading,
    error,
  } = useMutation({
    mutationFn: userLogout,
    onSuccess: () => {
      navigate("/login");
      queryClient.removeQueries();
      toast.success("Logged Out User");
    },
  });

  return { logout, isLoading, error };
}
