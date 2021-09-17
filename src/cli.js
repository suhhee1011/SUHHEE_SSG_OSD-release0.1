import arg from 'arg';
let fs = require('fs');
function getArgs(rawArgs){
    const args = arg(
{
    '--version':Boolean,
    '--help':Boolean,
    '--input':Boolean,
    '--StyledInput': Boolean,
    '-v':'--version',
    '-h':'--help',
    '-i':'--input',
    '-s':'--StyledInput'
},
{
    argv:rawArgs.slice(2)
}

    );
    return{
        input: args['--input']||false,
        help: args['--help']||false,
        version: args['--version']||false,
        styledInput : args['--StyledInput']||false,
    };
}



export function cli(args) {
    let options = getArgs(args);
    
    if(options.version){
        console.log("Name :  Simple Text Site Generator\nVersion :  1.0");
    }else if(options.help){
        console.log("Help:");
        console.log(" 1. --version(-v) :\n \t it will show you application name and version");
        console.log(" 2. --help(-h) :\n \t it will give you all the instruction that you need to use this application.");
        console.log(" 3. --input [filename/foldername](-i [filename/foldername]) : \n \t it will automatically create website for you \n \t using file that you put in command line \n \t or if you put folder name then it will automatically get all the txt files from the folder and create website for you.");
    }else if(options.input || options.styledInput){
        
        fs.readdir(`./dist`,function(error,filelist){
            for(let num in filelist){
             fs.unlink(`./dist/${filelist[num]}`, (err)=>{
                console.log(err);
             });
            }

            });



        let filename = args.slice(3,4);
        console.log(filename)
            const patternExt = /(\w|-)+./;
            let TextArr=[];
            let result = filename.toString().replace(patternExt,'');
            if(result==undefined){
                fs.readdir(filename,function(error,filelist){
                    for(let num in filelist){
                        let ext = filelist[num].toString().replace(patternExt, '');
                        const patternName = new RegExp('.' + ext + '$');
                        let nameOnly = filelist[num].toString().replace(patternName, '');
                        TextArr[num].push(nameOnly);
                    }
                });
                
            }else if(result=="txt"){
                let ext = filename.toString().replace(patternExt, '');
                const patternName = new RegExp('.' + ext + '$');
                let nameOnly = filename.toString().replace(patternName, '');
                TextArr[0] = nameOnly;
            }

           for(let num in TextArr){
        
    fs.readFile('./Texts/'.concat(TextArr[num],".",result), 'utf8', function (err, data) {
   
     
          let title = data.split("\n");
        
            let dataArr = data.split('\n');
            let dataTemplate = "";
         
            for (let temp = 1;temp< dataArr.length;temp ++) {

                dataTemplate += `<p>${dataArr[temp]}</p>`;

            }
            let url = "../public/style.css";
            if(options.styledInput){
              url = args.slice(4);
            }
            let html =""
            if(title!=""){
                 html =`
                <!doctype html>
               <html lang="en">
               <head>
                 <meta charset="utf-8">
                 <title>${title[0]}</title>
                 <link rel="stylesheet" type="text/css" href="${url}">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
               </head>
               <body>
               <h1>${title[0]}</h1>
                 ${dataTemplate}
               </body>
               </html>
               `

            }else{
                html =`
                <!doctype html>
               <html lang="en">
               <head>
                 <meta charset="utf-8">
                 <title>${TextArr[num]}</title>
                 <link rel="stylesheet" type="text/css" href="${url}">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
               </head>
               <body>
            
                 ${dataTemplate}
               </body>
               </html>
               `
            }
           


            fs.writeFile('./dist/'.concat(TextArr[num], '.html'), html, function (err) {

                if (err) console.log(err)


               
            })
        });
        }

           
       
    }else {
        console.log("Please enter other input!\n  You can enter \n \t 1. --version(-v) for version\n \t 2. --help(-h) for Help\n \t 3. --input [filename](-i [filename]) for create static website");
    }
    
   }