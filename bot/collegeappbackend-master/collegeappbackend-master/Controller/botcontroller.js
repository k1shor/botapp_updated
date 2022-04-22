
const bot = require("../Model/bot");
const Bot = require("../Model/bot");




// To Add User

exports.addBot = async (req, res) => {
    let bot = new Bot({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        image: req.file.path,
        like: 0,
        dislike: 0,
        link: req.body.link,

    });
    Bot.findOne({ name: bot.name }, async (error, data) => {
        if (data == null) {
            bot = await bot.save()

            if (!bot) {
                return res.status(400).json({ error: "Something went wrong." });
            } else {
                res.send(bot);
            }
        }
        else {
            return res.status(400).json({ error: "Choose a different bot name." });
        }
    });
};









// to view all bots
exports.botList = async (req, res) => {
    const bot = await Bot.find()
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(bot)
}

exports.musicbotList = async (req, res) => {
    const bot = await Bot.find({type:'music'})
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(bot)
}
exports.gamingbotList = async (req, res) => {
    const bot = await Bot.find({type:"games"})
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(bot)
}
exports.utilitybotList = async (req, res) => {
    const bot = await Bot.find({type:"utility"})
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(bot)
}
exports.entertainmentbotList = async (req, res) => {
    const bot = await Bot.find({type:"entertainment"})
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(bot)
}
exports.productivitybotList = async (req, res) => {
    const bot = await Bot.find({type:"productivity"})
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(bot)
}

// to find individual/particular bot
exports.findbot = async (req, res) => {
    const bot = await Bot.findById(req.params.botid)
    if (!bot) {
        return res.status(400).json({ error: "bot not found" })
    }
    res.send(bot)
}

exports.findBot = async (req, res) => {
    let bot = await Bot.findById(req.params.id)
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(bot)
    }
}

// to update a bot
exports.updatebot = async (req, res) => {
    let bot = await Bot.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name
        },
        { new: true }
    )
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(bot)
    }
}

// to delete a category
exports.deletebot = (req, res) => {
    let bot = Bot.findByIdAndRemove(req.params.id)
        .then(bot => {
            if (!bot) {
                return res.status(400).json({ error: "bot not found" })
            }
            else {
                return res.status(200).json({ msg: "bot deleted successfully" })
            }
        })
        .catch(error => res.status(400).json({ error: error }))
}

exports.sendlike = async (req,res) =>{
    let bot = await Bot.findByIdAndUpdate(req.params.id,{
        like:req.body.like
    }, {new:true})
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(bot)
    }
}

exports.dislike = async (req,res) =>{
    let bot = await Bot.findByIdAndUpdate(req.params.id,{
        dislike:req.body.dislike
    }, {new:true})
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(bot)
    }
}