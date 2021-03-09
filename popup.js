// not so fast there cowboy, gotta load the whole page first
document.addEventListener('DOMContentLoaded', function () {



    document.querySelector('button').addEventListener('click', onclick, false)
    
    // onclick for button to react to and send a request to content.js to grab the raw data
    // and send it to us socially distanced funcs here at popup.js
    function onclick () {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
      })
    }

    const copyBtn = document.querySelector('#copy_btn');

    copyBtn.addEventListener('click', function () {

      const urlField = document.querySelector('table');
      
      // create a range object
      const range = document.createRange();  

      // set the node to select the "range"
      range.selectNode(urlField);

      // add the range to the set of window selections
      window.getSelection().addRange(range);
      
      // execute "copy", can't "cut" in this case
      document.execCommand('copy');

      // change inner HTML of button to confirm table has been copied to the user
      document.getElementById('copy_btn').innerHTML = "Kopiert!✔️";
    }, false);
        

    // handling the response that comes back from content.js after a request was sent
    // from the onclick function
    function setCount (res) {


      //Printing purchases to table 
      document.getElementById('trdPurchases').innerHTML = res.trdPurchases;
      document.getElementById('trmPurchases').innerHTML = res.trmPurchases;
      document.getElementById('stvPurchases').innerHTML = res.stvPurchases;
      document.getElementById('oslPurchases').innerHTML = res.oslPurchases;
      document.getElementById('berPurchases').innerHTML = res.berPurchases;
      document.getElementById('totalPurchases').innerHTML = res.totalPurchases;

    
      // Printing TTV to table
      document.getElementById('trdTtv').innerHTML = res.trdTtv;
      document.getElementById('trmTtv').innerHTML = res.trmTtv;
      document.getElementById('stvTtv').innerHTML = res.stvTtv;
      document.getElementById('oslTtv').innerHTML = res.oslTtv;
      document.getElementById('berTtv').innerHTML = res.berTtv;
      document.getElementById('totalTtv').innerHTML = res.totalTtv;


      // Printing ADT to table
      document.getElementById('trdAdt').innerHTML = res.trdAdt;
      document.getElementById('trmAdt').innerHTML = res.trmAdt;
      document.getElementById('stvAdt').innerHTML = res.stvAdt;
      document.getElementById('oslAdt').innerHTML = res.oslAdt;
      document.getElementById('berAdt').innerHTML = res.berAdt;
      document.getElementById('totalAdt').innerHTML = res.totalAdt;

      
      // Printing ADR to table
      document.getElementById('trdAdr').innerHTML = res.trdAdr;
      document.getElementById('trmAdr').innerHTML = res.trmAdr;
      document.getElementById('stvAdr').innerHTML = res.stvAdr;
      document.getElementById('oslAdr').innerHTML = res.oslAdr;
      document.getElementById('berAdr').innerHTML = res.berAdr;
      document.getElementById('totalAdr').innerHTML = res.totalAdr;


      //Printing AFR to table
      document.getElementById('trdAfr').innerHTML = res.trdAfr;
      document.getElementById('trmAfr').innerHTML = res.trmAfr;
      document.getElementById('stvAfr').innerHTML = res.stvAfr;
      document.getElementById('oslAfr').innerHTML = res.oslAfr;
      document.getElementById('berAfr').innerHTML = res.berAfr;
      document.getElementById('totalAfr').innerHTML = res.totalAfr;

      
      //Printing Rejection % to table
      document.getElementById('trdRej').innerHTML = res.trdRej;
      document.getElementById('trmRej').innerHTML = res.trmRej;
      document.getElementById('stvRej').innerHTML = res.stvRej;
      document.getElementById('oslRej').innerHTML = res.oslRej;
      document.getElementById('berRej').innerHTML = res.berRej;

    }
  }, false)