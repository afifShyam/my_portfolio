export interface EmailData {
  name: string;
  email: string;
  message: string;
}

/**
 * Sends an email using the mailto protocol
 * @param data The email data containing name, email and message
 * @returns A promise that resolves when the email is sent
 */
const sendEmail = async (data: EmailData): Promise<void> => {
  return new Promise((resolve) => {
    const { name, email, message } = data;

    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(`Message from ${name} (${email}):\n\n${message}`);

    window.location.href = `mailto:afifshyamsul12@email.com?subject=${subject}&body=${body}`;
    
    // Resolve after a short delay to simulate async behavior
    setTimeout(resolve, 500);
  });
};

const emailService = {
  sendEmail
};

export default emailService;
