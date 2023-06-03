import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import classNames from "classnames";

import styles from "./button.module.css";
import { SocialButtonType } from "./utils/constants";

const Icons = {
  [SocialButtonType.GOOGLE]: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19.5" fill="white" stroke="#EFEFEF" />
      <g clip-path="url(#clip0_269_6185)">
        <path
          d="M15.3602 21.7384L14.78 23.9042L12.6596 23.9491C12.0259 22.7737 11.6665 21.4289 11.6665 19.9999C11.6665 18.618 12.0026 17.3149 12.5983 16.1675H12.5987L14.4865 16.5136L15.3134 18.39C15.1404 18.8946 15.046 19.4363 15.046 19.9999C15.0461 20.6116 15.1569 21.1977 15.3602 21.7384Z"
          fill="#FBBB00"
        />
        <path
          d="M28.1876 18.4432C28.2833 18.9473 28.3332 19.4679 28.3332 20C28.3332 20.5966 28.2705 21.1786 28.151 21.7399C27.7453 23.6502 26.6854 25.3182 25.217 26.4986L25.2165 26.4982L22.8388 26.3769L22.5022 24.2761C23.4766 23.7047 24.2381 22.8105 24.6392 21.7399H20.1831V18.4432H28.1876Z"
          fill="#518EF8"
        />
        <path
          d="M25.2164 26.4981L25.2169 26.4986C23.7888 27.6465 21.9747 28.3333 19.9999 28.3333C16.8263 28.3333 14.0672 26.5595 12.6597 23.9491L15.3602 21.7385C16.064 23.6167 17.8758 24.9537 19.9999 24.9537C20.9129 24.9537 21.7682 24.7069 22.5021 24.2761L25.2164 26.4981Z"
          fill="#28B446"
        />
        <path
          d="M25.3188 13.5851L22.6192 15.7953C21.8596 15.3205 20.9617 15.0462 19.9997 15.0462C17.8275 15.0462 15.9818 16.4445 15.3133 18.3901L12.5986 16.1675H12.5981C13.9851 13.4935 16.779 11.6666 19.9997 11.6666C22.0217 11.6666 23.8756 12.3869 25.3188 13.5851Z"
          fill="#F14336"
        />
      </g>
      <defs>
        <clipPath id="clip0_269_6185">
          <rect width="16.6667" height="16.6667" fill="white" transform="translate(11.6665 11.6666)" />
        </clipPath>
      </defs>
    </svg>
  ),
  [SocialButtonType.FACEBOOK]: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19.5" fill="white" stroke="#EFEFEF" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.9125 28.6428V20.6277H24.3471L24.7448 17.0654H21.9125V15.3304C21.9125 14.4131 21.9359 13.5031 23.2184 13.5031H24.5173V10.9562C24.5173 10.9179 23.4016 10.8314 22.2728 10.8314C19.9154 10.8314 18.4393 12.3073 18.4393 15.0173V17.0654H15.8345V20.6277H18.4393V28.6428H21.9125Z"
        fill="#3182E7"
      />
    </svg>
  ),
  [SocialButtonType.OUTLOOK]: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19.5" fill="white" stroke="#EFEFEF" />
      <g clip-path="url(#clip0_269_6205)">
        <path
          d="M19.9312 11H21.222V15.1859C23.4579 15.1901 25.692 15.1799 27.926 15.1859C28.3662 15.165 28.9686 15.2884 28.9599 15.8264C29.042 18.474 28.9623 21.1281 28.9992 23.7779C29.0079 24.2467 28.9929 24.9858 28.3344 24.9919C25.9665 25.0715 23.5922 24.998 21.2223 25.0231V29H19.8837C16.5941 28.4201 13.2959 27.8866 10.0024 27.3246C10.0008 22.4422 10 17.5601 10 12.6785C13.3112 12.1157 16.622 11.5712 19.9312 11Z"
          fill="#0071C5"
        />
        <path
          d="M21.222 15.815C23.6135 15.8169 26.003 15.8089 28.3945 15.8192C28.3862 15.9562 28.3497 16.0901 28.287 16.2131C28.2244 16.336 28.1368 16.4456 28.0297 16.5351C26.6008 17.8264 25.1762 19.1211 23.756 20.4191C22.8991 19.6678 22.0674 18.891 21.222 18.1271V15.815ZM14.6279 16.58C15.2289 16.378 15.8862 16.4016 16.4702 16.646C17.0543 16.8904 17.5228 17.338 17.7836 17.9006C18.4876 19.4705 18.3879 21.6178 16.9891 22.8047C15.6995 23.8743 13.5397 23.265 12.9527 21.7457C12.1802 19.9937 12.5556 17.2978 14.6279 16.58Z"
          fill="white"
        />
        <path
          d="M24.434 20.6049C25.7299 19.4096 27.0391 18.2231 28.3428 17.0343C28.3491 19.4873 28.3428 21.9422 28.3452 24.3952H21.2222C21.2222 22.57 21.2228 20.7455 21.2241 18.9218C22.0292 19.6126 22.7501 20.3997 23.605 21.0295C23.9569 21.0927 24.1945 20.7976 24.434 20.6049Z"
          fill="white"
        />
        <path
          d="M14.8371 17.8377C15.121 17.7161 15.4425 17.7059 15.7339 17.8094C16.0254 17.9129 16.2642 18.1219 16.4 18.3925C16.8047 19.246 16.8572 20.2172 16.5469 21.1071C16.3462 21.7285 15.6437 22.2414 14.9647 21.9966C14.1165 21.7369 13.8597 20.7617 13.851 19.9979C13.84 19.2066 14.0277 18.2208 14.8371 17.8377Z"
          fill="#0071C5"
        />
      </g>
      <defs>
        <clipPath id="clip0_269_6205">
          <rect width="19" height="18" fill="white" transform="translate(10 11)" />
        </clipPath>
      </defs>
    </svg>
  ),
} as Record<SocialButtonType, React.ReactNode>;

type ButtonProps = MUIButtonProps & {
  btnType?: SocialButtonType;
};

const SocialButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { btnType = SocialButtonType.GOOGLE, className, children, ...rest } = props;

  return (
    <MUIButton
      {...rest}
      className={classNames(className, styles["social"])}
      sx={{
        fontFamily: "inherit",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "27px",
        padding: "18px",
        borderRadius: "14px",
        textAlign: "left",
        justifyContent: "start",
        boxShadow: "0px 4px 40px rgba(200, 197, 213, 0.32)",
        "& .MuiButton-startIcon": {
          height: "40px",
          width: "40px",
        },
      }}
      startIcon={Icons[btnType]}
    >
      {children}
    </MUIButton>
  );
};

export default SocialButton;
