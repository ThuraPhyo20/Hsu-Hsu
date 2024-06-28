document.addEventListener('DOMContentLoaded', () => {
  const movies = [
    {
      title: 'Oggy and the Cockroaches',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
      image: 'https://pics.filmaffinity.com/oggy_et_les_cafards_le_film-980608470-large.jpg',
      rating: '8.2'
    },
    {
      title: 'Tom and Jerry',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival...',
      image: 'https://tiermaker.com/images/chart/chart/tom-and-jerry-films-118421/918wc69pfwlrijpg.png',
      rating: '7.5'
    },
    {
      title: 'Ben 10',
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vQwa-6fCzpbn0ORIKwqP3-UfyJyN2sQXvg&s',
      rating: '8.0'
    },
    {
      title: 'Adventure Time',
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DxiCJdfXaCLmn9F9Ei2X6HpKfszzZIC0nA&s',
      rating: '8.6'
    },
    {
      title: 'Despicable Me 2',
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc...',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2y98SFIDZWeFtNfp_GKouB9bOLQyFPsvJYA&s',
      rating: '7.4'
    }
  ];

  const movieList = document.getElementById('movie-list');

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'col-md-4 movie-card';

    movieCard.innerHTML = `
      <div class="card">
        <img src="${movie.image}" class="card-img-top" alt="${movie.title}" data-title="${movie.title}" data-description="${movie.description}" data-image="${movie.image}" data-rating="${movie.rating}">
        <div class="card-body">
          <h5 class="card-title" data-title="${movie.title}" data-description="${movie.description}" data-image="${movie.image}" data-rating="${movie.rating}">${movie.title}</h5>
          <p class="card-text">${movie.description}</p>
        </div>
      </div>
    `;

    movieCard.querySelectorAll('img, .card-title').forEach(element => {
      element.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const title = encodeURIComponent(target.getAttribute('data-title'));
        const description = encodeURIComponent(target.getAttribute('data-description'));
        const image = encodeURIComponent(target.getAttribute('data-image'));
        const rating = encodeURIComponent(target.getAttribute('data-rating'));
        window.location.href = `movie-detail.html?title=${title}&description=${description}&image=${image}&rating=${rating}`;
      });
    });

    movieList.appendChild(movieCard);
  });
});
