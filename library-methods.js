const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
                  const keyOfPList = Object.keys(this.playlists)
  
                  for (let plistKey of keyOfPList) {
                  const plist = this.playlists[plistKey];
                  console.log(`${plist.id}: ${plist.name} - ${plist.tracks.length} tracks`)
                  }
              },
  printTracks: function () {
               const keyOfTracks = Object.keys(this.tracks)
               for (let tracklst of keyOfTracks) {
                 const unitTrack = this.tracks[tracklst];
                 console.log(`${unitTrack.id}: ${unitTrack.name} by ${unitTrack.artist} (${unitTrack.album})`);

                  }
              },
  printPlaylist: function(playlistId){
                 let keysList = Object.keys(this.playlists);

                 for (let plist of keysList) {
                 if(plist === playlistId) {
                 const inPlaylst = this.playlists[plist];
                 console.log (`${inPlaylst.id}: ${inPlaylst.name} - ${inPlaylst.tracks.length} tracks`);
                   for (let trks of inPlaylst.tracks) {
                     const inTracks = this.tracks[trks]
                     console.log(`${inTracks.id}: ${inTracks.name} by ${inTracks.artist} (${inTracks.album})`); 
                    }
    
                  }
                 }
              },
  addTrackToPlaylist: function(trackId, playlistId) {
                      const keyOfPList = Object.keys(this.playlists)
                      for (let plist of keyOfPList) {
                        if(plist === playListId) {
                          const selectPlaylist = this.playlists[plist]
                          selectPlaylist.tracks.push(trackId);
      
                        return  selectPlaylist.tracks;
                        }
                      }
               },

  generateUid: function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
               },
  addTrack:    function(name, artist, album) {
               let idUsed = generateUid();
               this.tracks.idUsed = {
                 id :  idUsed,
                 name : name,
                 artist : artist,
                 album : album
  
                } 
              },
  addPlaylist:  function(name) {
                let playlistId = generateUid();
                this.playlists.playlistId= {
                  id: playlistId,
                  name: name,
                  tracks: []
                }
              }
  
};

