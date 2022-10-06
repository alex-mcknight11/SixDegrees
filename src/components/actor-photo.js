// import axios from 'axios';

// export default ActorPhoto; {
//   constructor(center, makeMove, filterText); {
//     this.makeMove = makeMove
//     this.filterText = filterText

//     this.center = Object.assign({}, center, {
//       text: center.name,
//       frameId: `c${center.id}`,
//       imgLink: center.profile_path ? `https://image.tmdb.org/t/p/w185${center.profile_path}` : "https://raw.githubusercontent.com/alex-mcknight11/Six Degrees/assets/images/actoriconbkg.jpg"
//     });

//     this.localMovies = null;
//   }
// }

  //   axios.get(`/moviesbyactor/${center.id}`)
  //     .then(res => {
  //       this.localMovies = res.data

  //       if (this.filterText) {
  //         const reg = new RegExp(this.filterText, 'i')

  //         for (let movieId in this.localMovies) {
  //           if (!this.localMovies[movieId].title.match(reg)) {
  //             delete this.localMovies[movieId]
  //           }
  //         }
  //       }

  //       this.nodes = [this.center]
  //         .concat(Object.keys(this.localMovies).map(id => {
  //           const text = this.localMovies[id].title.length > 22 ? (
  //             this.localMovies[id].title.slice(0, 20) + '...'
  //           ) : (this.localMovies[id].title);
    
  //           return Object.assign({}, this.localMovies[id], {
  //             text: text,
  //             frameId: id,
  //             imgLink: this.localMovies[id].poster_path ? `https://image.tmdb.org/t/p/w185${this.localMovies[id].poster_path}` : "https://raw.githubusercontent.com/Six Degrees/Six Degrees/assets/images/cameraiconbkg.jpg"
  //           })
  //         })
  //         .sort((a, b) => {
  //           return (a.popularity > b.popularity) ? -1 : 1
  //         }))
    
  //       this.links = [];
        
  //       this.nodes.forEach((node, idx) => {
  //         if (idx === 0) return;
  //         this.links.push({source: this.center.frameId, target: node.frameId})
  //       })

  //       this.currCenterX = this.width / 2;
  //       this.currCenterY = this.height / 2;
  //       this.nodes[0].fx = this.currCenterX;
  //       this.nodes[0].fy = this.currCenterY;
        
  //       this.render();
  //       return
  //     })
      
  //   this.width = window.innerWidth - 320;
  //   this.height = window.innerHeight;
  // }
  //