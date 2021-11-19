const img = require('images-scraper')

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
    name : 'Image',
    execute : async(Client, message, args) => {
        const query = args.join(" ")
        if(!query) return message.reply("Veuillez précisez l'image à rechercher.")

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }
}