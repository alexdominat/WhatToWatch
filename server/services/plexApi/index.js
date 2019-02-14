import plexApiClient from './plexApi';

const getUsers = async (req, res) => {
  const plexApi = plexApiClient();
  const users = await plexApi.getUsers();
  res.json(users);
};

const getMostWatched = async (req, res) => {
  const plexApi = plexApiClient();
  const mostWatched = await plexApi.getMostWatched(req.query);
  res.json(mostWatched);
};

const getSections = async (req, res) => {
  const plexApi = plexApiClient();
  const sections = await plexApi.getSections();
  res.json(sections);
};

const getLibraryDataBySection = async (req, res) => {
  try {
    const plexApi = plexApiClient();
    const sections = await plexApi.getLibraryDataBySection(req.query);
    res.json(sections);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getUsers,
  getMostWatched,
  getSections,
  getLibraryDataBySection,
};
