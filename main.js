$(function(){
      // Test to make sure JS file is linked up properly with index.html
      // alert('Successful JS setup!');

      // Save token as independent variable to secure token
      let token = 'f6e31505b2b20cd6c02104325de3313c';

      var getData = fetch('https://bonus.ly/api/v1/bonuses', {
          method: 'get',
          headers: new Headers({
              'Authorization': 'Bearer '+token,
              'Content-Type': 'application/x-www-form-urlencoded'
          })
      })
      .then(response => response.json())
      .then(data => {
            // Test returned data from API
            // console.log(data);
            console.log(data.result);
            // Loop through all elements in response from API and append each element to an html tag type with an IIFE
            (function appendBonusList() {
                  for (var i = 0; i < data.result.length; i++) {
                        let wrapper = $('<div class="bonus-list-item" />').appendTo('#bonus-list-section');
                        let recipient = '<h3 class="recipient-name">' + data.result[i].receiver.display_name + '</h3>';
                        let amount = '<p class="bonus-amount">' + data.result[i].amount + '</p>';
                        let giverNote = '<p>' + data.result[i].giver.display_name + ': ' + data.result[i].reason_decoded + '</p>';
                        wrapper.append(recipient, amount, giverNote);
                  }
            })();
      })
      .catch(function (error) {
            console.log(error);
      })
})
