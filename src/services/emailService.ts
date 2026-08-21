export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  const { name, message } = data;

  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${data.email})`);

  window.location.href = `mailto:Afifshyamsul00@gmail.com?subject=${subject}&body=${body}`;
};

export default { sendEmail };
