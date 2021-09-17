# SUHHEE_SSG_OSD-release0.1
This is an html generator from text file to html.

# Technology used
+  Node.js

# License Used
+ MIT License

# Created by
+ Suhhee Kim

# Before Use You need to do
1. Download or clone the code.<br>
2. Download node, if you dont have it.<br>
3. Add environment variable on your laptop(C:\Program Files\nodejs)<br>
4. Open the codes.<br>
5. Locate yourself to where package.json is located.<br>
6. Open cmd, type npm i and wait for download.<br>


# Main Features
1. Run by Commands, such as help, version and input(Please look at the HElP for details!)
2. It will convert your text file to Static HTML file with some styles!

# Optional Features
1. It has built in Fancy styled css!
2. Also able to add your external css with the command -styledInput(-s) with link(Details and example is in HELP!)



## Help:
1. create-ssg --version(-v) :<br>
it will show you application name and version<br>
```
  ex.
  $ create-ssg  --version
  $ create-ssg  -v 
  ```
 2. create-ssg  --help(-h) :<br>
         it will give you all the instruction that you need to use this application.<br>
 ```        
  ex.
  $ create-ssg  --help
  $ create-ssg  -h 
  ```       
 3. create-ssg --input [filename/foldername](-i [filename/foldername]) :<br>
         it will automatically create website for you using file that you put in command line<br>
         or if you put folder name then it will automatically get all the txt files from the folder and create website for you.<br>
```
  ex.
  $ create-ssg  --input [filename/foldername]
  $ create-ssg  -i[filename/foldername] 
```
  4. create-ssg --styledInput [filename/foldername] [external css link] (-s [filename/foldername] [external css link]): <br> 
           it will automatically generate website \n \t with beautful external css"
```
  ex.
  $ create-ssg  --steyledInput [filename/foldername] [external css link]<br>
  $ create-ssg  -s [filename/foldername] [external css link]<br>

```


         
         
