const{test,expect}= require('@playwright/test')


test('AssertionsTest',async({page})=>{
    //Opne Url 
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    const logoElement= await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();
    
    const searchStoreBox= page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled();


    //check radio btn is click or not 
    const maleradioBtn= await page.locator('#gender-male')
    await maleradioBtn.click();
    await expect(maleradioBtn).toBeChecked();

})