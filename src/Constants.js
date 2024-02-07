const BASE_URI = import.meta.env.VITE_BASE_URI;

export default {
  BASE_URI,
  USE_CASES: {
    LEADERBOARD_ACCURACY_SCORES: "leaderboard/accuracy_scores",
    LEADERBOARD_REFRESH_ACCURACY_SCORES: "leaderboard/refresh_accuracy_scores",
    REGISTER: "login/register",
  },
};
