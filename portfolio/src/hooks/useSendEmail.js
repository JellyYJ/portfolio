import emailjs from "@emailjs/browser";

const sendEmail = (form) => {
  return emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    form,
    process.env.REACT_APP_PUBLIC_KEY
  );
};

export { sendEmail };
