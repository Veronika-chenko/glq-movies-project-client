import { LOCALES } from '../const';

export const en = {
  [LOCALES.ENGLISH]: {
    navigation: {
      home: 'Movies Recommendation',
      settings: 'Settings',
    },
    select: 'Select',
    delete: 'Delete',
    details: 'Details',

    // selected section:
    no_selected_movies: 'No selected movies',
    put_the_list_name: 'Put the list name',
    required_field: 'Required',

    // confirm modal:
    share_with_friends: 'Share with friends',
    copied: 'Copied!',

    // movie details modal
    modal: {
      popularity: 'Popularity',
      release_date: 'Release date',
      genres: 'Genres',
      overview: 'About',
    },

    // filters
    filters: {
      sort_by: 'Sort by',
      sort_direction: 'Sort direction',
      include_adult: 'Include adult',
      year: 'Year',
      release_year: 'Release year',
      genre: 'Genre',
      submit: 'Submit',
      sort: {
        popularity: 'Popularity',
        release_date: 'Release date',
        revenue: 'Revenue',
        primary_release_date: 'Primary release date',
        original_title: 'Original title',
        vote_average: 'Vote average',
        vote_count: 'Vote count',
      },
      sort_direction_options: {
        asc: 'ASC',
        desc: 'DESC',
      },
    },

    // errors:
    invalid_link: 'The link provided is invalid',
    something_went_wrong: 'Oops, something went wrong. Please, try again later',

    // Recommend Page:
    recommendation_list_name: 'list name',

    // NotFound Page:
    notFound: {
      error_text: 'Page Not Found',
      home_link: 'Go Home',
    },
  },
};
