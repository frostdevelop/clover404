import fs from 'fs'
import path from 'path'
import url from 'url'

//Promises api is better practice but whatever -_-
const templateData = fs.readFileSync(path.join(path.dirname(url.fileURLToPath(import.meta.url)),'/templates/default.htm'), "utf8");
const defaultMessages = ["This is awkward... We can't find this page!","Hmm, that's not supposed to happen. You may have entered the wrong url.","Sorry... We can't find this page! V-V"];
const defaultImages = [
	"https://media1.tenor.com/m/l3IL3KItyLUAAAAd/sad-anime.gif",
	"https://media1.tenor.com/m/NNsIukEdTTUAAAAd/link-click-xia-fei.gif",
	"https://media.tenor.com/HnKb6eV2ALsAAAAj/anime.gif",
	"https://media.tenor.com/PHDNS1ZPt34AAAAj/sad-eyes-sad.gif",
	"https://media.tenor.com/jczQB19mnk0AAAAj/chibi-anime-boy.gif",
	"https://media.tenor.com/RwpAY9p76VsAAAAj/no-sleep.gif",
	"https://media1.tenor.com/m/826vmR19jygAAAAd/maru-sueharu-osamake.gif",
	"https://media1.tenor.com/m/5eO4er6KlmUAAAAd/question-mark-gif-anime-boy.gif",
	"https://media1.tenor.com/m/GIQjfThzwH8AAAAd/kinich-ajaw.gif",
	"https://media1.tenor.com/m/48KYdSUKr3cAAAAd/sketch-sketching.gif",
	"https://media1.tenor.com/m/2uSb2XPxYNUAAAAd/mad-angry.gif",
	"https://media1.tenor.com/m/RPZpK1RHbv0AAAAd/anime-sad.gif",
	"https://media1.tenor.com/m/xbFoKSXWSaQAAAAd/cute-anime-boy-sakura-haruka.gif",
	"https://media.tenor.com/pLDe0NLTTQgAAAAj/sad.gif",
	"https://media1.tenor.com/m/me3McoSAAYEAAAAd/anime-boy-dazai-osamu.gif",
	"https://media.tenor.com/vXNKR-j2oKkAAAAj/sad-mafumafu.gif"
];
const defaultTitle = "404 (Sorry!)";

export default class lostPage{
	constructor(siteName="404 not found!",author="",props={}){
		this.template = props.template ?? templateData;
		this.title = props.title ?? defaultTitle;
		this.messages = props.messages ?? defaultMessages;
		this.images = props.images ?? defaultImages;
		this.site_name = siteName;
		this.author = author;
		this.themeColor = props.themeColor ?? "#FF0000";
		this.location = props.location ?? "back";
		this.destination = props.destination ?? "onclick='history.back()'";
		this.twitterHandle = props.twitterHandle ?? "";
		this.controller = this.controller.bind(this);
	}
	controller(req,res){
		res.writeHead(404,{'Content-Type':'text/html'}).end(this.template
			.replaceAll("{{title}}",this.title)
			.replaceAll("{{site_name}}",this.site_name)
			.replaceAll("{{theme_color}}",this.themeColor)
			.replaceAll("{{author}}",this.author)
			.replaceAll("{{twitter_handle}}",this.twitterHandle)
			.replaceAll("{{destination}}",this.destination)
			.replaceAll("{{location}}",this.location)
			.replaceAll("{{message}}",this.messages[Math.floor(Math.random()*this.messages.length)])
			.replaceAll("{{image}}",this.images[Math.floor(Math.random()*this.images.length)])
		)
	}

}
