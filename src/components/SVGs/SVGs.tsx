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

export const ArrowDown: React.FC<{ white?: boolean; size?: number }> = ({
  white,
  size,
}) => {
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

export const OutlinedLightning: React.FC = () => {
  return (
    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      ></path>
    </svg>
  );
};

export const OutlinedFavorite: React.FC<{ white?: boolean }> = ({ white }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4.331 12.047 12 20l7.669-7.953A4.804 4.804 0 0 0 21 8.714C21 6.111 18.965 4 16.454 4a4.465 4.465 0 0 0-3.214 1.38L12 6.668 10.76 5.38A4.465 4.465 0 0 0 7.546 4C5.036 4 3 6.11 3 8.714c0 1.25.479 2.45 1.331 3.333Z"
      />{" "}
    </svg>
  );
};

export const Box3D = () => {
  return (
    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strok-width="1"
        fill="#000"
        d="M20.73 16.52V7.59a.73.73 0 0 0-.08-.33.74.74 0 0 0-.36-.36l-8-3.58a.75.75 0 0 0-.62 0l-8 3.58a.8.8 0 0 0-.44.69v8.82a.83.83 0 0 0 .44.69l8 3.58a.72.72 0 0 0 .62 0l8-3.58a.77.77 0 0 0 .44-.58Zm-16-7.78 6.5 2.92v7.18l-6.5-2.91V8.74Zm8 2.92 6.5-2.92v7.19l-6.5 2.91v-7.18ZM12 4.82l6.17 2.77L12 10.35 5.83 7.59 12 4.82Z"
      />
    </svg>
  );
};

export const PaperPlane = () => {
  return (
    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        id="Vector"
        d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </svg>
  );
};

export const Bell = () => {
  return (
    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M9 17.5V18.5C9 20.1569 10.3431 21 12 21C13.6569 21 15 20.1569 15 18.5V17.5M5.99999 8.5C5.99999 5.18629 8.68628 3.5 12 3.5C15.3137 3.5 18 5.18629 18 8.5C18 10.4392 18.705 12.6133 19.4316 14.3389C20.0348 15.7717 19.0222 17.5 17.4676 17.5H6.53237C4.97778 17.5 3.96518 15.7717 4.56842 14.3389C5.29493 12.6133 5.99999 10.4392 5.99999 8.5Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Plus: React.FC = () => {
  return(

    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 5V19M5 12H19"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

  )
}

export const Minus: React.FC = () => {
  return(

    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M5 12H19"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

  )
}

export const HighQuality: React.FC = () => {
  return(
    <svg
      className="w-6 h-6 inline"
      fill="none"
      stroke="black"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m347.371 207.307-25.6-25.6a8.523 8.523 0 0 0-12.066 0l-87.834 87.834-28.1-28.1a8.523 8.523 0 0 0-12.066 0l-25.6 25.6a8.523 8.523 0 0 0 0 12.066l59.733 59.733a8.473 8.473 0 0 0 6.033 2.5 8.509 8.509 0 0 0 6.033-2.5l119.467-119.467a8.523 8.523 0 0 0 0-12.066zm-125.5 113.434-47.667-47.667 13.534-13.534 28.1 28.1a8.523 8.523 0 0 0 12.066 0l87.834-87.834 13.534 13.534-107.401 107.401z" />
    <path d="m510.025 301.746-38.11-45.739 38.11-45.739a8.53 8.53 0 0 0 1.178-9.079 8.55 8.55 0 0 0-7.731-4.915H391.403l-7.484-52.403a8.529 8.529 0 0 0-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687a8.51 8.51 0 0 0-10.923 0l-48.828 40.687h-65.178a8.536 8.536 0 0 0-8.448 7.322l-7.484 52.412H8.538a8.55 8.55 0 0 0-7.731 4.915 8.507 8.507 0 0 0 1.178 9.079l38.11 45.739-38.11 45.739a8.53 8.53 0 0 0 6.553 13.994h112.068c2.278 15.915 7.492 52.412 7.492 52.412a8.52 8.52 0 0 0 8.439 7.322h65.178l48.828 40.687c1.587 1.323 3.524 1.98 5.461 1.98s3.883-.657 5.461-1.98l48.819-40.687c13.261 0 65.203.034 65.186 0a8.536 8.536 0 0 0 8.448-7.322s5.214-36.497 7.492-52.412h112.06a8.55 8.55 0 0 0 7.731-4.915 8.504 8.504 0 0 0-1.176-9.08zm-483.268-3.072 31.002-37.205a8.53 8.53 0 0 0 0-10.923L26.757 213.34h83.029l-31.002 37.205a8.53 8.53 0 0 0 0 10.923l31.002 37.205H26.757zm350.703 3.063a8.391 8.391 0 0 0-1.075 1.647c-.597 1.195-.623 1.246-8.303 55.023-62.882 0-62.942.034-64.691.905a8.852 8.852 0 0 0-1.647 1.075l-45.739 38.11-45.739-38.11a8.506 8.506 0 0 0-5.461-1.98h-60.868c-7.68-53.777-7.706-53.828-8.303-55.023a8.852 8.852 0 0 0-1.075-1.647l-38.11-45.73 38.11-45.739a8.497 8.497 0 0 0 1.894-4.258l7.484-52.403h60.868c1.997 0 3.925-.7 5.461-1.98l45.739-38.11c46.49 38.741 46.524 38.758 47.386 39.194a8.577 8.577 0 0 0 3.814.896h60.868l7.484 52.412a8.514 8.514 0 0 0 1.894 4.258l38.11 45.73-38.101 45.73zm24.763-3.063 31.002-37.205a8.53 8.53 0 0 0 0-10.923l-31.002-37.205h83.029l-31.002 37.205a8.53 8.53 0 0 0 0 10.923l31.002 37.205h-83.029z" />

</svg>
  )
}

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
