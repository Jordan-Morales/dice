// linked

//jQuery
$ (() => {

    // 6 Sided Die
    generateRandomSix = () => {
        return Math.floor((Math.random() * 6) + 1)
      }

    $('.dieSixButton').on('click', () => {
      let dieSix = generateRandomSix();
      let listItem = $('<li>' + dieSix + '</li>')
      $('.dieSixResultLog').append(listItem)
    })

    // 20 Sided Die
    generateRandomTwenty = () => {
        return Math.floor((Math.random() * 20) + 1)
      }

    $('.dieTwentyButton').on('click', () => {
      let dieTwenty = generateRandomTwenty();
      let listItem = $('<li>' + dieTwenty + '</li>')
      $('.dieTwentyResultLog').append(listItem)
    })

  });
