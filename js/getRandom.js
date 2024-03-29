function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateComments() {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const names = ['Артём', 'Иван', 'Мария', 'Светлана', 'Александр', 'Дарья'];

  const comments = [];
  const numberOfComments = getRandomInt(0, 30);

  for (let i = 0; i < numberOfComments; i++) {
    comments.push({
      id: getRandomInt(1, 1000),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: messages[getRandomInt(0, messages.length - 1)],
      name: names[getRandomInt(0, names.length - 1)]
    });
  }

  return comments;
}

function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии ${i}`,
      likes: getRandomInt(15, 200),
      comments: generateComments()
    });
  }

  return photos;
}

const photosArray = generatePhotos();
console.log(photosArray);

export {photosArray};
