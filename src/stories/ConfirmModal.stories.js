import { ConfirmModal } from '../components/ConfirmModal';

export default {
  title: 'ConfirmModal component',
  component: ConfirmModal,
};

export const Primary = {
  args: {
    open: true,
    onCLose: () => {},
    title: 'My fav movies',
    url: 'https://localhost:3000/recommend?title="my movies"&ids=123,234',
  },
};
