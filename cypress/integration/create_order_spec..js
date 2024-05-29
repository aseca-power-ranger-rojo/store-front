describe('Creating an order', () => {
    let jugueteIds = [];
    beforeAll(() => {
        const baseUrl = process.env.REACT_APP_API_URL; // Replace 'YOUR_BASE_URL' with your actual API base URL
        // Define the curl commands
        const curlCommands = [
            { name: 'Juguete1', price: '10.99' },
            { name: 'Juguete2', price: '20.49' },
            { name: 'Juguete3', price: '15.75' },
            { name: 'Juguete4', price: '5.99' },
            { name: 'Juguete5', price: '8.50' }
        ];

        // Execute each curl command
        curlCommands.forEach((command) => {
            cy.request({
                method: 'POST',
                url: `${baseUrl}`, // Replace `${baseUrl}` with the endpoint you want to POST to
                headers: {
                    'Content-Type': 'application/json'
                },
                body: command
            }).then((response) => {
                // Save the id from the response
                jugueteIds.push(response.body.id);
            });
        });
    });
    it('Should be able to create a new order', () => {
        // Visit the page where order creation happens
        cy.visit('http://localhost:3002/');

        jugueteIds.forEach((id) => {
            cy.get(`#${id} button`).click(); // Click on the 'Add to cart' button for each product
        });

        let buyClass = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSuccess MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSuccess MuiButton-root MuiButton-contained MuiButton-containedSuccess MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSuccess css-xxai4d-MuiButtonBase-root-MuiButton-root'
        cy.get(`.${buyClass}`).click();

        // falta la validacion
    });
});
