$(()=>{

    const app = Sammy('#main',function () {        /// div to populate and routs
                this.use('Handlebars','hbs');
                this.get('index.html',function ()   {
                    this.swap('Some text')
                })
    });

    app.run();
});