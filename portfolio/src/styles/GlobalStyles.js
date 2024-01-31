import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Soft Brown */
    --color-brown-0: #f9f5f5;
    --color-brown-50: #fcecec;
    --color-brown-100: #f2dada;
    --color-brown-200: #ebc6c4;
    --color-brown-300: #dfb5b1;
    --color-brown-400: #d4a19f;
    --color-brown-500: #c88d8b;
    --color-brown-600: #ba7f7d;
    --color-brown-700: #a96f6d;
    --color-brown-800: #995b59;
    --color-brown-900: #8a4d4b;

    /* Soft Grey */
    --color-grey-0: #f9f9f9;
    --color-grey-50: #f5f5f5;
    --color-grey-100: #e1e1e1;
    --color-grey-200: #d0d0d0;
    --color-grey-300: #bcbcbc;
    --color-grey-400: #a8a8a8;
    --color-grey-500: #959595;
    --color-grey-600: #818181;
    --color-grey-700: #6e6e6e;
    --color-grey-800: #545454;
    --color-grey-900: #464646;

    /* Soft Blue */
    --color-blue-0: #f9f9f9;
    --color-blue-50: #e9f0f7;
    --color-blue-100: #d2e6f3;
    --color-blue-200: #b6d8ee;
    --color-blue-300: #9ac7e9;
    --color-blue-400: #80b8e6;
    --color-blue-500: #6ba7e1;
    --color-blue-600: #5b98d4;
    --color-blue-700: #4f87c2;
    --color-blue-800: #4377b0;
    --color-blue-900: #335a8f;

    /* Other Soft Colors */
    --color-green-100: #d9f3df;
    --color-green-700: #6fb377;
    --color-yellow-100: #fff9e2;
    --color-yellow-700: #e0b656;
    --color-silver-100: #edeff2;
    --color-silver-700: #8b99a8;
    --color-indigo-100: #d5dcff;
    --color-indigo-700: #7f8ff5;

    --color-pink-100: #fcd7d7;
    --color-pink-200: #f9aac8;
    --color-pink-300: #f276a2;
    --color-pink-700: #f0467e;
    --color-orange-700: #ff9e4a;
    --color-red-700: #fa5a5a;
    --color-red-800: #e94444;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    /* For dark mode */
    --image-grayscale: 0;
    --image-opacity: 100%;
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  
    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    /* font-family: "Poppins", sans-serif; */
    font-family: 'Quicksand', sans-serif;
    color: var(--color-grey-700);
  
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }
  
  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
  
  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
  
  /* Parent selector, finally 😃 */
  button:has(svg) {
    line-height: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: 100%;
  
    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }
  
  /*
  FOR DARK MODE
  
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;
  
  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;
  
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  
  --backdrop-color: rgba(0, 0, 0, 0.3);
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  
  --image-grayscale: 10%;
  --image-opacity: 90%;
  */  
  `;

export default GlobalStyles;
