interface EmailData {
  name: string;
  email: string;
  message: string;
}

const sendEmail = (data: EmailData) => {
  const { name, message } = data;

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`${message}`);

  window.location.href = `mailto:afifshyamsul12@email.com?subject=${subject}&body=${body}`;
};

export default { sendEmail };
