export const formatDate = (isoDateString, locale = 'en-US') => {
    if (!isoDateString)
        return '';
    const date = new Date(isoDateString);
    return date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};
