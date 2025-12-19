const{test, except} = require('@playwright/test');
test('locatemultipleelements',async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html');

    const links= await page.$$('a');
    for(const link of links){
       const linktext= await link.textContent();
       console.log(linktext);
    }

})