const whatsappNumber =
  import.meta.env.CONTACT_WHATSAPP_NUMBER ?? "5547999999999";
const email = import.meta.env.CONTACT_EMAIL ?? "contato@mecanicafraga.com.br";
const instagramUrl =
  import.meta.env.CONTACT_INSTAGRAM_URL ?? "https://instagram.com/";

const whatsappDigits = whatsappNumber.replace(/\D/g, "");

const formatBrazilianPhone = (digits: string) => {
  const withoutCountryCode = digits.startsWith("55") ? digits.slice(2) : digits;
  const areaCode = withoutCountryCode.slice(0, 2);
  const firstPart = withoutCountryCode.slice(2, 6);
  const secondPart = withoutCountryCode.slice(6, 11);

  if (!areaCode || !firstPart || !secondPart) {
    return whatsappNumber;
  }

  return `(${areaCode}) ${firstPart}-${secondPart}`;
};

export const contactConfig = {
  email,
  emailHref: `mailto:${email}`,
  phoneDisplay: formatBrazilianPhone(whatsappDigits),
  phoneHref: `tel:+${whatsappDigits}`,
  instagramUrl,
  whatsappHref: `https://wa.me/${whatsappDigits}`,
};
