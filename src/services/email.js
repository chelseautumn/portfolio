import emailjs from "emailjs-com";
const apiKey = import.meta.env.VITE_EMAIL_API_KEY;
const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

export const sendEmail = async (email_or_phone, message) => {
    const templateParams = {
        email_or_phone: email_or_phone,
        message: message,
    };
    emailjs.send(serviceId, templateId, templateParams, apiKey);
}