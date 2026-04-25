export function formatPhoneForHref(phoneNumber) {
  return `tel:${phoneNumber.replace(/\s+/g, "")}`;
}
