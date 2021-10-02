let movies = [
    {
      name: "肖生克的救赎",
      englishName: "The Shawshank Redemption",
      director: "弗兰克 德拉邦特",
      type: ["剧情", "犯罪"],
      language: "英语",
      releaseYear: 1994,
      releaseCountry: "US",
      runtime: 142, // 片长 分钟
      imdbRating: 9.3,
      doubanRating: 9.7
    },
    {
      name: "机器人总动员",
      englishName: "WALL-E",
      director: "安德鲁 斯坦顿",
      type: ["科幻", "动画", "冒险"],
      language: "英语",
      releaseYear: 2008,
      releaseCountry: "US",
      runtime: 98, // 片长 分钟
      imdbRating: 8.4,
      doubanRating: 9.3
    },
    {
      name: "霸王别姬",
      englishName: "Farewell My Concubine",
      director: "陈凯歌",
      type: ["剧情", "爱情", "同性"],
      language: "普通话",
      releaseYear: 1993,
      releaseCountry: "China",
      runtime: 171, // 片长 分钟
      imdbRating: 8.4,
      doubanRating: 9.6
    },
    {
      name: "阿甘正传",
      englishName: "Forrest Gump",
      director: "罗伯特·泽米吉斯",
      type: ["剧情", "爱情"],
      language: "英语",
      releaseYear: 1994,
      releaseCountry: "US",
      runtime: 142, // 片长 分钟
      imdbRating: 8.8,
      doubanRating: 9.5
    },
    {
      name: "教父",
      englishName: "TThe Godfather",
      director: "弗朗西斯·福特·科波拉",
      type: ["剧情", "犯罪"],
      language: "英语",
      releaseYear: 1972,
      releaseCountry: "US",
      runtime: 175, // 片长 分钟
      imdbRating: 9.2,
      doubanRating: 9.3
    }
];


function printMoviesSummary(movies) {
  movies.forEach(movie => 
  console.log(`Name:${movie.name}, Doubanrating:${movie.doubanRating}`));  
}
printMoviesSummary(movies);

function populateMoviesAvgRating(movies) {
  let newMovies = movies.map(movie => 
    ({...movie, avgRating: (movie.imdbRating + movie.doubanRating)/2}));
  return newMovies;
}
console.log(populateMoviesAvgRating(movies));


function searchMovieByName(movies, searchText) {
  let movie = movies.find(movie => movie.englishName.includes(searchText));
  return movie;
}
console.log(searchMovieByName(movies, "WALL"));


function searchMoviesByType(movies, movieType) {
  let movie = movies.filter(movie => movie.type.includes(movieType));
  return movie;
}
console.log(searchMoviesByType(movies, "爱情"));



function searchMoviesByYear(movies, startYear, endYear) {
  let movie = movies.filter(movie => {return (movie.releaseYear >= startYear && movie.releaseYear <= endYear)});
  return movie;
}
console.log(searchMoviesByYear(movies, 1994, 2008));

function getMovieAvgRatingPerType(movies, movieType) {
  let movie = movies.filter(movie => movie.type.includes(movieType));
  let avgDoubanRating = movie.reduce((sum,movie) => sum + movie.doubanRating, 0)/movie.length;
  let avgImdbRating = movie.reduce((sum, movie) => sum + movie.imdbRating, 0)/movie.length;
  return `Doubanrating: ${avgDoubanRating},  Imdbrating: ${avgImdbRating}`;
}
console.log(getMovieAvgRatingPerType(movies, "爱情"));