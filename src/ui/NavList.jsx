import {
  HiArrowRightOnRectangle,
  HiMiniUserPlus,
  HiUserCircle,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

import styles from "./NavList.module.css";
import ButtonIcon from "./ButtonIcon";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";
import MiniLoader from "./MiniLoader";

function NavList() {
  const { user } = useUser();
  const { logout, isLoading } = useLogout();
  const { fullName } = user?.user_metadata ?? {};

  return (
    <div className={styles.account}>
      {fullName && (
        <ButtonIcon>
          <HiUserCircle />
          <span>{fullName}</span>
        </ButtonIcon>
      )}

      {fullName ? (
        <ButtonIcon onClick={logout} disabled={isLoading}>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      ) : (
        <Link to="/signup">
          <ButtonIcon>
            <HiMiniUserPlus />
          </ButtonIcon>
        </Link>
      )}
    </div>
  );
}

export default NavList;
