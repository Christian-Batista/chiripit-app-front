class ValidationErrorHandler {
    static getMessage(errors) {
        const messages = {};
        for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
                messages[key] = errors[key].map(error => error.msg).join(', ');
            }
        }
        return messages;
    }
}