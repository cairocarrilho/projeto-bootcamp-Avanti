function Layout({ children }) {
  return (
    <div className="h-screen w-screen !overflow-hidden bg-primary-pure-5 flex items-center justify-center">
      <div className="!overflow-hidden h-screen w-screen absolute z-0 pointer-events-none">
        <svg
          width="100vw"
          height="100vh"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M214.375 289.263C564.27 289.263 847.917 26.2995 847.917 -298.083C847.917 -622.465 564.27 -885.429 214.375 -885.429C-135.52 -885.429 -419.167 -622.465 -419.167 -298.083C-419.167 26.2995 -135.52 289.263 214.375 289.263Z"
              fill="#7952B3"
            />
            <path
              d="M3468.25 961.185C3247.78 721.548 3062.78 517.151 2839.78 277.514C2723.21 150.647 2573.69 23.7807 2396.3 -32.6045C2368.42 -42.002 2340.55 -49.0502 2312.67 -53.749C2249.32 -63.1465 2180.89 -63.1465 2115.01 -63.1465C2049.12 -63.1465 1980.69 -63.1464 1914.81 -51.3995C1886.93 -46.7008 1859.05 -39.6526 1831.18 -30.255C1653.79 26.1302 1506.81 152.997 1387.7 279.864C1167.23 519.501 982.233 723.897 759.226 963.534C427.251 1271.3 19.2498 1611.96 95.2748 2088.89C168.766 2328.53 353.76 2565.81 685.736 2633.95C870.73 2669.19 1461.19 2530.57 2089.66 2530.57H2135.28C2763.75 2530.57 3354.21 2666.84 3539.21 2633.95C3871.18 2565.81 4056.18 2326.18 4129.67 2088.89C4208.23 1609.61 3800.23 1268.95 3468.25 961.185Z"
              fill="#7952B3"
            />
          </g>
          <defs>
            <clipPath id="clip0_27_472">
              <rect
                width="6082"
                height="5638.52"
                fill="white"
                transform="translate(-926 -2530)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative flex flex-col  z-10 !pointer-events-auto">{children}</div>
    </div>
  );
}

export default Layout;
