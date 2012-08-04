@tageswoche = @tageswoche || {}

tageswoche.data = do ->
  
  specialConditions =
    fd: "Freistoss direkt"
    fi: "Freistoss indirekt"
    e:  "Ecke"
    p:  "Penalty"
    ps: "Penaltyschiessen"
    ew: "Einwurf"
    f:  "Foul"

  scenes: undefined
  current: -1
  
  nextScene: () ->
    @current += 1 if @current < ( @scenes.length - 1 )
    @scenes[@current]
  
  previousScene: () ->
    @current -= 1 if @current > 0
    @scenes[@current]
  
  loadScenes: (callback) ->
    if @scenes
      callback(undefined, @scenes)
      return
    
    $.ajax(
      url: "http://tageswoche.jit.su/fcb/situations",
      dataType: "jsonp"
    ).done ( data ) =>
      data = data.list
        
      newData = for entry in data
        {
          actions: entry.playerPositions
          score: entry.score
          minute: entry.minute
          opponent: entry.opponent
          team: entry.team
          home: entry.homematch
          date: entry.date
          competition: entry.competition
          scorePosition: entry.scorePosition
        }
      
      # console.log( newData )
      
      @scenes = newData
      callback(undefined, newData)
      
    return
    
  loadScenesFake: (callback) ->
    data = [
      {
        score: "1:0"
        minute: 85
        date: "01.06.2012"
        opponent: "GC"
        home: true
        tournament: "l"
        scorePosition: "OM"
        actions:
          [
            {
              name: "Stocker"
              number: 5
              positions: ["H1"]
            },
            {
              name: "Park"
              number: 8
              positions: ["E1", "C10"]
            },
            {
              name: "Streller"
              number: 10
              positions: ["E9", "A8"]
            },
            {
              name: "D. Degen"
              number: 7
              positions: ["C7"]
            }
          ]
      }, {
        score: "2:0"
        minute: 86
        date: "01.06.2012"
        opponent: "GC"
        home: true
        tournament: "l"
        scorePosition: "UL"
        actions:
          [
            {
              name: "Frei"
              number: 11
              positions: ["H4", "F4"]
            },
            {
              name: "Park"
              number: 8
              positions: ["E6"]
            },
            {
              name: "Frei"
              number: 11
              positions: ["C5"]
            }
          ]
      }
    ]
    @scenes = data
    callback(undefined, data)
    