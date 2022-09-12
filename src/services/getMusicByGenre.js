export function getMusicByGenre() {
    return fetch('https://api.spotify.com/v1/artists/6LArUyIoMiHmDvvOAsE2cd/related-artists')
      .then(data => data.json())
  }
  