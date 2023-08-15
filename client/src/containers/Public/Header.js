import logo from "../../assets/Booking-Logo.png";
// import { Button } from "../../components";
import { styled } from "@mui/material/styles";
import { purple, red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";
import { path } from "../../utils/constant";
import Navigation from "./Navigation";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));


const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);
  return (
    <div className="w-1100">
      <div className="w-full flex items-center justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
        />
        <div className="flex items-center gap-1">
          <small>Chào mừng bạn đến với BookingApp.com</small>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={goLogin}
          >
            Đăng nhập
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={goLogin}
          >
            Đăng ký
          </Button>
          <ColorButton
            variant="contained"
            sx={{
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Đăng tin mới
            <AddCircleOutlineIcon />
          </ColorButton>
        </div>
      </div>
    </div>
  );
};
export default memo(Header);
