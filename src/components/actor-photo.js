import React from 'react';

class ActorPhoto {
  constructor(center, filterText) {
    this.filterText = filterText

    this.center = Object.assign({}, center, {
      text: center.name,
      frameId: `c${center.id}`,
      imgLink: center.profile_path ? `https://image.tmdb.org/t/p/w185${center.profile_path}`
    });
  }
}