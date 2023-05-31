export const ArrowRight: React.FC<{ white?: boolean }> = ({ white }) => {
  return (
    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke={white ? "white" : "black"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

export const ArrowDown: React.FC<{ white?: boolean, size?: number }> = ({ white, size }) => {
  return (
    <svg
      className={`w-${size || 6} h-${size || 6} inline`}
      fill="none"
      stroke={white ? "white" : "black"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export const Hamburger: React.FC<{ onClick: Function; isOpen: boolean }> = ({
  onClick,
  isOpen,
}) => {
  return (
    <svg
      onClick={() => onClick()}
      className="w-6 h-6 cursor-pointer md:hidden absolute top-7 left-7"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );
};

export const Wave1: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 320 "
      className="absolute bottom-0"
      style={{ zIndex: -1 }}
    >
      <path
        fill="#FFECE6"
        fillOpacity="0.3"
        d="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,170.7C305.5,149,349,75,393,58.7C436.4,43,480,85,524,122.7C567.3,160,611,192,655,197.3C698.2,203,742,181,785,165.3C829.1,149,873,139,916,154.7C960,171,1004,213,1047,240C1090.9,267,1135,277,1178,245.3C1221.8,213,1265,139,1309,128C1352.7,117,1396,171,1418,197.3L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
      ></path>
    </svg>
  );
};

// export const Wave1: React.FC = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       viewBox="0 0 1440 320 "
//       className="absolute bottom-0"
//       style={{ zIndex: -1 }}
//     >
//       <path
//         fill="#FFECE6"
//         fill-opacity="0.3"
//         d="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,170.7C305.5,149,349,75,393,58.7C436.4,43,480,85,524,122.7C567.3,160,611,192,655,197.3C698.2,203,742,181,785,165.3C829.1,149,873,139,916,154.7C960,171,1004,213,1047,240C1090.9,267,1135,277,1178,245.3C1221.8,213,1265,139,1309,128C1352.7,117,1396,171,1418,197.3L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
//       ></path>
//     </svg>
//   );
// };

export const Wave2: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 320 "
      className="absolute bottom-0"
      style={{ zIndex: -1 }}
    >
      <path
        fill="#FFEAE5"
        fill-opacity="0.3"
        d="M0,320L24,288C48,256,96,192,144,170.7C192,149,240,171,288,165.3C336,160,384,128,432,133.3C480,139,528,181,576,170.7C624,160,672,96,720,90.7C768,85,816,139,864,160C912,181,960,171,1008,144C1056,117,1104,75,1152,80C1200,85,1248,139,1296,170.7C1344,203,1392,213,1416,218.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
      ></path>{" "}
    </svg>
  );
};
export const Wave3: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 320 "
      className="absolute bottom-0"
      style={{ zIndex: -1 }}
    >
      <path
        fill="#FFE5E6"
        fill-opacity="0.5"
        d="M0,64L34.3,53.3C68.6,43,137,21,206,48C274.3,75,343,149,411,160C480,171,549,117,617,96C685.7,75,754,85,823,101.3C891.4,117,960,139,1029,160C1097.1,181,1166,203,1234,192C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
      ></path>
    </svg>
  );
};
