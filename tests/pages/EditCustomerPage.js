export class EditCustomerPage{
    constructor(page){
        this.page=pgae;
        this.idInput=page.locator('input[name="cusid"]');
        this.submitButton = page.locator('input[type="submit"]');
    }
    async edit(cusid){
    await this.idInput.fill(cusid);
    await this.submitButton.click()
}}