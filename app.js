// linked

//jQuery
$ (() => {


// hide all die rows
  $('.dieFourRow').hide();
  $('.dieSixRow').hide();
  $('.dieEightRow').hide();
  $('.dieTwentyRow').hide();
// establish toggle display of dieRow
  $('#d4Toggle').on('click', () => {
    $('.dieFourRow').toggle()
  })
  $('#d6Toggle').on('click', () => {
    $('.dieSixRow').toggle()
  })
  $('#d8Toggle').on('click', () => {
    $('.dieEightRow').toggle()
  })
  $('#d20Toggle').on('click', () => {
    $('.dieTwentyRow').toggle()
  })

// add die set to get total number
  getSum = (total, num) => {
    return total + Math.round(num);
  }

    // 4 Sided Die
    generateRandomFour = () => {
        return Math.floor((Math.random() * 4) + 1)
      }

    $('#dieFourButton').on('click', () => {
      let repeater = $('#dieFourInput').val();
      let resultFourArray = [];

      // replace self to allow for new spin
      let el = $('#die4');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die4').addClass('buttonDieSpin');

        for (let x = 0; x < repeater; x++) {
            let dieFour = generateRandomFour();
            resultFourArray.push(dieFour);
            let listItem = $('<li>' + dieFour + '</li>')
            $('#dieFourResultLog').prepend(listItem)
        }
        let resultFour = resultFourArray.reduce(getSum, 0);
        $('#resultFour').text(resultFour);
    })

    // 6 Sided Die
    generateRandomSix = () => {
        return Math.floor((Math.random() * 6) + 1)
      }

    $('#dieSixButton').on('click', () => {
      let repeater = $('#dieSixInput').val();
      let resultSixArray = [];

      // replace self to allow for new spin
      let el = $('#die6');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die6').addClass('buttonDieSpin');

        for (let x = 0; x < repeater; x++) {
            let dieSix = generateRandomSix();
            resultSixArray.push(dieSix);
            let listItem = $('<li>' + dieSix + '</li>')
            $('#dieSixResultLog').prepend(listItem)
        }
        let resultSix = resultSixArray.reduce(getSum, 0);
        $('#resultSix').text(resultSix);
    })

    // 8 Sided Die
    generateRandomEight = () => {
        return Math.floor((Math.random() * 8) + 1)
      }

    $('#dieEightButton').on('click', () => {
      let repeater = $('#dieEightInput').val();
      let resultEightArray = [];

      // replace self to allow for new spin
      let el = $('#die8');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die8').addClass('buttonDieSpin');

        for (let x = 0; x < repeater; x++) {
            let dieEight = generateRandomEight();
            resultEightArray.push(dieEight);
            let listItem = $('<li>' + dieEight + '</li>')
            $('#dieEightResultLog').prepend(listItem)
        }
        let resultEight = resultEightArray.reduce(getSum, 0);
        $('#resultEight').text(resultEight);
    })

    // 20 Sided Die
    generateRandomTwenty = () => {
        return Math.floor((Math.random() * 20) + 1)
      }

    $('#dieTwentyButton').on('click', () => {
      let repeater = $('#dieTwentyInput').val();
      let resultTwentyArray = [];

      // replace self to allow for new spin
      let el = $('#die20');
      let newone = el.clone(true);
      el.replaceWith(newone);
      // add spin class
      $('#die20').addClass('buttonDieSpin');

        for (let x = 0; x < repeater; x++) {
            let dieTwenty = generateRandomTwenty();
            resultTwentyArray.push(dieTwenty);
            let listItem = $('<li>' + dieTwenty + '</li>')
            $('#dieTwentyResultLog').prepend(listItem)
        }
        let resultTwenty = resultTwentyArray.reduce(getSum, 0);
        $('#resultTwenty').text(resultTwenty);

    })

// ready for additional die
    // $('#die_Button').on('click', () => {
    //   let repeater = $('#die_Input').val();
    //   let result_Array = [];

    // replace self to allow for new spin
    // let el = $('#die_');
    // let newone = el.clone(true);
    // el.replaceWith(newone);
    // // add spin class
    // $('#die_').addClass('buttonDieSpin');
    //     for (let x = 0; x < repeater; x++) {
    //         let die_ = generateRandom_();
    //         result_Array.push(die_);
    //         let listItem = $('<li>' + die_ + '</li>')
    //         $('#die_ResultLog').prepend(listItem)
    //     }
    //     let result_ = result_Array.reduce(getSum, 0);
    //     $('#result_').text(result_);
    // })



  });
