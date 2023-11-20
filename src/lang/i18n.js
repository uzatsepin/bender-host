import { createI18n } from "vue-i18n";
import ru from './ru/ru.json'
import en from './en/en.json'

export const i18n = createI18n({
    locale: 'ru',
    messages: {
        'ru': ru,
        'en': en,
    },
})