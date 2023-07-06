import { LOCALES } from '../const';

export const en = {
  [LOCALES.ENGLISH]: {
    navigation: {
      home: 'Movies recommendation',
      settings: 'Settings',
    },
    no_selected_movies: 'No selected movies',
    put_the_list_name: 'Put the list name',
    share_with_friends: 'Share with friends',
    copied: 'Copied!',
    select: 'Select',
    delete: 'Delete',
    details: 'Details',
    // movie details modal
    modal: {
      popularity: 'Popularity',
      releaseDate: 'Release date',
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
    //
    recommendation_list_name: 'list name',
    // NotFound Page:
    notFound: {
      errorText: 'Page Not Found',
      homeLink: 'Go Home',
    },
  },
};
