
// reacting to incoming message from popup.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    // collecting all relevant data we want in the table

  const trdPurchases = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(3) > span > span").innerHTML;
  const trmPurchases = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(3) > span > span").innerHTML;
  const stvPurchases = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(3) > span > span").innerHTML;
  const oslPurchases = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(4) > td:nth-child(3) > span > span").innerHTML;
  const berPurchases = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(5) > td:nth-child(3) > span > span").innerHTML;
  const totalPurchases = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tfoot > tr > td:nth-child(2)").innerHTML;

  const trdTtv = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(4) > span > span").innerHTML;
  const trmTtv = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(4) > span > span").innerHTML;
  const stvTtv = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(4) > span > span").innerHTML;
  const oslTtv = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(4) > td:nth-child(4) > span > span").innerHTML;
  const berTtv = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(5) > td:nth-child(4) > span > span").innerHTML;
  const totalTtv = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tfoot > tr > td:nth-child(3)").innerHTML;

  const trdAdt = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(5) > span > span").innerHTML;
  const trmAdt = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(5) > span > span").innerHTML;
  const stvAdt = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(5) > span > span").innerHTML;
  const oslAdt = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(4) > td:nth-child(5) > span > span").innerHTML;
  const berAdt = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(5) > td:nth-child(5) > span > span").innerHTML;
  const totalAdt = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-stuck-footer-wrapper > table > tfoot > tr > td:nth-child(4)").innerHTML;

  const trdAdr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(6) > span > span").innerHTML;
  const trmAdr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(6) > span > span").innerHTML;
  const stvAdr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(6) > span > span").innerHTML;
  const oslAdr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(4) > td:nth-child(6) > span > span").innerHTML;
  const berAdr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(5) > td:nth-child(6) > span > span").innerHTML;
  const totalAdr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tfoot > tr > td:nth-child(5)").innerHTML;

  const trdAfr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > span").innerHTML;
  const trmAfr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(2) > td:nth-child(7) > span > span").innerHTML;
  const stvAfr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(3) > td:nth-child(7) > span > span").innerHTML;
  const oslAfr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(4) > td:nth-child(7) > span > span").innerHTML;
  const berAfr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(5) > td:nth-child(7) > span > span").innerHTML;
  const totalAfr = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(1) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tfoot > tr > td:nth-child(6)").innerHTML;

  const rej1 = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(2) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(1)").innerText;
  const rej2 = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(2) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(2)").innerText;
  const rej3 = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(2) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(3)").innerText;
  const rej4 = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(2) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(4)").innerText;
  const rej5 = document.querySelector("#dashboard > div > div.dashboard-elements > div > div > div > div > div.grid > div:nth-child(2) > div > lk-vis-element > div > div > div.vis-wrapper-container > div > div > div > lk-visualization-container > div > div > div > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(5)").innerText;

  let oslRej;
  let trdRej;
  let trmRej;
  let stvRej;
  let berRej;

  let rejArr = [rej1, rej2, rej3, rej4, rej5];

  // strict checking rej
  
  for(let i = 0; i < rejArr.length; i++) {
    if(rejArr[i].includes("Oslo")) {
      oslRej = rejArr[i].slice(-5);
    } else if(rejArr[i].includes("Trondheim")) {
      trdRej = rejArr[i].slice(-5);
    } else if(rejArr[i].includes("Tromsø")) {
      trmRej = rejArr[i].slice(-5);
    } else if(rejArr[i].includes("Stavanger")) {
      stvRej = rejArr[i].slice(-5);
    } else if(rejArr[i].includes("Bergen")) {
      berRej = rejArr[i].slice(-5);
    } 
  }


  // and a SLICK one line response with the sendResponse method, if I do say so myself. sending the data we collected back to popup to be drawn 
  // in the HTML table in popup.hmtl 

  sendResponse({trdPurchases: trdPurchases, trmPurchases: trmPurchases, stvPurchases: stvPurchases, oslPurchases: oslPurchases, berPurchases: berPurchases, totalPurchases: totalPurchases, 
                trdTtv: trdTtv, trmTtv:  trmTtv, stvTtv: stvTtv, oslTtv: oslTtv, berTtv: berTtv, totalTtv: totalTtv,
                trdAdt: trdAdt, trmAdt: trmAdt, stvAdt: stvAdt, oslAdt: oslAdt, berAdt: berAdt, totalAdt: totalAdt,
                trdAdr: trdAdr, trmAdr: trmAdr, stvAdr: stvAdr, oslAdr: oslAdr, berAdr: berAdr, totalAdr: totalAdr,
                trdAfr: trdAfr, trmAfr: trmAfr, stvAfr: stvAfr, oslAfr: oslAfr, berAfr: berAfr, totalAfr: totalAfr,
                trdRej: trdRej, trmRej: trmRej, stvRej: stvRej, oslRej: oslRej, berRej: berRej})
})
