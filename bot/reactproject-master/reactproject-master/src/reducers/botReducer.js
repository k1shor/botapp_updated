const initialData={
    bots:[{
        name:"QIFTTT",
        type:"utility",
        detail:"With this bot you can use IFTTT to link your Telegram groups/channels to more than 360 other services such as Twitter and Instagram, or connected devices like Hue lights and Nest",
        like:100,
        dislike:10, 
        image:'./BOT_IMAGE/bot1.jpg',
        link:'https://telegram.me/IFTTT'
    },
    {
        name:"Hide It Bot",
        type:"utility",
        detail:"Send hidden message to anyone. The message sent will have its text hidden in plain sight and will only display its contents when people press the read button",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg',
        link:'https://telegram.me/HideItBothttps://telegram.me/IFTTT'
    },
    {
        name:"File Converter",
        type:"utility",
        detail:"Convert files from one format to another easily using this bot. It works with pictures audio files, and videos.",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg',
        link:'https://telegram.me/newfileconverterbot'
    },
    {
        name:"PrivateBOXbot",
        type:"utility",
        detail:"Bot can save your notes, texts, photos, video, animation or other files.",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg',
        link:'https://telegram.me/pboxbot'
    },
    {
        name:"Markdown Bot",
        type:"utility",
        detail:"Send messages in BOLD or ITALIC. It works automatically, no need to add it anywhere. Simply open any chats and type @bold and the message you want to send. Then select any one of the options to send the text in bold, italic or monowidth fonts.",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg',
        link:'https://telegram.me/bold'
    },{
        name:"Werewolf",
        type:"game",
        detail:"You and your friends are in a village where mysterious creatures lurk. Among the group, some players will play as the werewolves who are out to kill all the villagers before the game ends. The rest of the players will be villagers. Villagers need to work together to figure out who the werewolves are so as to ‘lynch’ them before they kill off the entire population. At the end of every round, villagers will have the chance to vote for who they think the werewolf is. You can oust someone based on majority votes, so it’s crucial to pick the right person to vote for (unless you’re the werewolf)!",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg',
        link:'https://t.me/werewolfbot?startgroup'
    },
    {
        name:"Pokerbot",
        type:"game",
        detail:"Forgot to bring along a deck of poker cards to your friends gathering? Don’t sweat it, you guys can still enjoy the game via Pokerbot! Get everyone to join a Telegram group chat and add the Pokerbot Telegram game bot to kickstart the fun! When it’s your turn, the bot will prompt you with a range of moves you can make including fold, all-in or check. The bot will also keep track of your winnings",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg',
        link:'https://t.me/pokerbot?do=open_link'
    },
    {
        name:"Chat Against Humanity",
        type:"game",
        detail:"Loved the witty puns found in Cards Against Humanity? Then Chat Against Humanity is just for you! This is one of the most hilarious Telegram games on the platform as players take turns selecting",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg',
        link:'https://t.me/chat_against_humanity_bot?do=open_link'
    },
    {
        name:"Dreamers",
        type:"game",
        detail:"Sometimes, we just want an easy-to-play game without learning too many rules. One of the most straightforward Telegram games is Dreamersbot, which is essentially a guessing game for all ages. Players will take turns being the Lucid Dreamer, the character who gets to select an image out of a pool of options provided by the bot. The Lucid Dreamer will have to provide a hint that describes the image",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg',
        link:'https://t.me/dreamersbot?do=open_link'
    },
    {
        name:"Arena Game RPG",
        type:"game",
        detail:"Telegram games need not be just about mini-games and card games. You can now enjoy your favourite role-playing multiplayer game with friends with Arena Game RPG! You get to create characters of your own",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg',
        link:'https://t.me/arenagametelegrambot?do=open_link'
    },
    {
        name:"productivity_bot1",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"productivity_bot21",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"productivity_bot3",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"productivity_bot4",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"productivity_bot5",
        type:"productivity",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },{
        name:"entertainment_bot1",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"entertainment_bot21",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"entertainment_bot3",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"entertainment_bot4",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"entertainment_bot5",
        type:"entertainment",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },{
        name:"music_bot1",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot1.jpg'
    },
    {
        name:"music_bot21",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot2.jpg'
    },
    {
        name:"music_bot3",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot3.jpg'
    },
    {
        name:"music_bot4",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot4.jpg'
    },
    {
        name:"music_bot5",
        type:"music",
        detail:"",
        like:0,
        dislike:0, 
        image:'./BOT_IMAGE/bot5.jpg'
    },
]
}

function botReducer(state = initialData, action) {
    // console.log(state)
    switch(action.type){
        case "ADD_BOT":
            return{
                bots:[...state,action.payload]
                // bots.push()
            }
            default:
                
                return state
    }
    
}

export default botReducer