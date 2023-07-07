import { LOCALES } from '../const';

export const uk = {
  [LOCALES.UKRAINIAN]: {
    navigation: {
      home: 'Рекомендації фільмів',
      settings: 'Налаштування',
    },
    select: 'Вибрати',
    delete: 'Видалити',
    details: 'Детальніше',

    // selected section:
    no_selected_movies: 'Немає вибраних фільмів',
    put_the_list_name: 'Вкажіть імʼя списку',
    required_field: "Обов'язково",

    // confirm modal:
    share_with_friends: 'Поділитися з друзями',
    copied: 'Скопійовано!',

    // movie details modal
    modal: {
      popularity: 'Популярність',
      release_date: 'Дата релізу',
      genres: 'Жанри',
      overview: 'Опис',
    },

    // filters
    filters: {
      sort_by: 'Сортувати по',
      sort_direction: 'Напрямок сортування',
      include_adult: 'Включно 18+',
      year: 'Рік',
      release_year: 'Рік випуску',
      genre: 'Жанр',
      submit: 'Пошук',
      sort: {
        popularity: 'Популярність',
        release_date: 'Дата випуску',
        revenue: 'Дохід',
        primary_release_date: 'Першочергова дата релізу',
        original_title: 'Оригінальна назва',
        vote_average: 'Середня оцінка',
        vote_count: 'Кількість оцінок',
      },
      sort_direction_options: {
        asc: 'за зростанням',
        desc: 'за спаданням',
      },
    },

    // errors:
    invalid_link: 'Посилання невалідне',
    something_went_wrong: 'Щось пішло не так. Будь ласка, спробуйте пізніше',

    // Recommend Page:
    recommendation_list_name: 'назва списку',

    // NotFound Page:
    notFound: {
      error_text: 'Сторінку не знайдено',
      home_link: "Перейти на 'Головна'",
    },
  },
};
