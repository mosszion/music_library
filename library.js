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
                  }
     };
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     const printPlaylists = function() {
      
       const keyOfPList = Object.keys(library.playlists)
       
       for (let plistKey of keyOfPList) {
         const plist = library.playlists[plistKey];
         console.log(`${plist.id}: ${plist.name} - ${plist.tracks.length} tracks`)
         
        
     
       }
       
     }
     
     
     
     
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     const printTracks = function() {
       const keyOfTracks = Object.keys(library.tracks)
       for( let tracklst of keyOfTracks){
         const unitTrack = library.tracks[tracklst];
         console.log(`${unitTrack.id}: ${unitTrack.name} by ${unitTrack.artist} (${unitTrack.album})`);
     
       }
     };
     
     
     // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     const printPlaylist = function (playlistId) {
       let keysList = Object.keys(library.playlists);
     
       for (let plist of keysList) {
         if(plist === playlistId) {
           const inPlaylst = library.playlists[plist];
           console.log (`${inPlaylst.id}: ${inPlaylst.name} - ${inPlaylst.tracks.length} tracks`);
          for (let trks of inPlaylst.tracks) {
               const inTracks = library.tracks[trks]
               return `${inTracks.id}: ${inTracks.name} by ${inTracks.artist} (${inTracks.album})`
              }
         
         }
       }
     }
     
     // adds an existing track to an existing playlist
     const addTrackToPlaylist = function(trackId, playlistId) {
       const keyOfPList = Object.keys(library.playlists)
        for (let plist of keyOfPList) {
         if(plist === playListId) {
           const selectPlaylist = library.playlists[plist]
           selectPlaylist.tracks.push(trackId);
         
          return  selectPlaylist.tracks;
         }
        }
     
     }
     
     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }
     
     
     // adds a track to the library
     const addTrack = function(name, artist, album) {
       let idUsed = generateUid();
       this.tracks.idUsed = {
         id :  idUsed,
         name : name,
         artist : artist,
         album : album
     
       } ;
       
     
     };
     
     
     // adds a playlist to the library
     const addPlaylist = function(name) {
       let playlistId = generateUid();
       this.playlists.playlistId= {
         id: playlistId,
         name: name,
         tracks: []
       }
                                 
       
     
     }
     
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri") 
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     const printSearchResults = function(query) {
     
     }