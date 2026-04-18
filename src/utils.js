/**
 * Gera um link para o Google Maps baseado em um endereço ou coordenadas.
 * @param {string} location - O endereço ou nome do local.
 * @returns {string} - URL persistente do Google Maps.
 */
export const getMapsUrl = (location) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
};

/**
 * Gera um link para adicionar um evento ao Google Calendar.
 * @param {Object} event - Objeto contendo os detalhes do evento.
 * @param {string} event.title - Título do evento.
 * @param {string} event.description - Descrição do evento.
 * @param {string} event.location - Local do evento.
 * @param {string} event.startDate - Data de início no formato YYYYMMDDTHHMMSSZ.
 * @param {string} event.endDate - Data de término no formato YYYYMMDDTHHMMSSZ.
 * @returns {string} - URL para o Google Calendar.
 */
export const getCalendarUrl = ({ title, description, location, startDate, endDate }) => {
  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
  return `${baseUrl}&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${startDate}/${endDate}`;
};
