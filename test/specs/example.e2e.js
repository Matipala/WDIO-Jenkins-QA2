
describe('Pruebas automatizadas de YouTube - QA2', () => {

    it('Debe abrir YouTube correctamente', async () => {
        await browser.url('https://www.youtube.com/');

        await expect(browser).toHaveTitle(
            expect.stringContaining('YouTube')
        );
    });

    it('Debe mostrar el buscador de YouTube', async () => {
        await browser.url('https://www.youtube.com/');

        const buscador = await $('input[name="search_query"]');

        await buscador.waitForDisplayed({
            timeout: 15000
        });

        await expect(buscador).toBeDisplayed();
    });

    it('Debe permitir buscar videos', async () => {
        await browser.url('https://www.youtube.com/');

        const buscador = await $('input[name="search_query"]');

        await buscador.waitForDisplayed({
            timeout: 15000
        });

        await buscador.setValue('Tutorial JavaScript');
        await browser.keys('Enter');

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/results?'),
            {
                timeout: 15000,
                timeoutMsg: 'No se abrió la página de resultados'
            }
        );

        await expect(browser).toHaveUrl(
            expect.stringContaining('search_query=')
        );
    });

});
