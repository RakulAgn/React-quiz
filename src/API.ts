import Shuffle from "./utils";



export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

enum QuestionType {
  MULTIPLECHOICE = "multiple",
  TRUEORFALSE = "boolean",
}

enum QuestionCategory {
  GeneralKnowledge = 9,
  EntertainmentBooks = 10,
  EntertainmentFilm = 11,
  EntertainmentMusic = 12,
  EntertainmentMusicalsTheatres = 13,
  EntertainmentTelevision = 14,
  EntertainmentVideoGames = 15,
  EntertainmentBoardGames = 16,
  ScienceNature = 17,
  ScienceComputers = 18,
  ScienceMathematics = 19,
  Mythology = 20,
  Sports = 21,
  Geography = 22,
  History = 23,
  Politics = 24,
  Art = 25,
  Celebrities = 26,
  Animals = 27,
  Vehicles = 28,
  EntertainmentComics = 29,
  ScienceGadgets = 30,
  EntertainmentJapaneseAnimeManga = 31,
  EntertainmentCartoonAnimations = 32,
}

const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  questionType: QuestionType,
  questionCategory: QuestionCategory
) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=${questionCategory}&difficulty=${difficulty}&type=${questionType}`;
  const data = await (await fetch(endPoint)).json();
  return data.results.map((question: Question) => ({ 
    ...question,
    answers: Shuffle([...question.incorrect_answers, question.correct_answer])
  }))
};

export { fetchQuizQuestions, Difficulty, QuestionType, QuestionCategory };

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
