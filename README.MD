# Unnamed Graph Coloring Project

# About
Around June 2020, for an university project, I made a graph handling and coloring software that worked beyond any expectations I could ever have. The idea behind this proyect is to make use of this software that I already got to create an interesting app.

# Built With
- React
- Python
- C

# The code

Sadly, the backend needs to remain private; so future students in my university won't copy it. Yet, the functions I added for the purpose of this project (color generation, json parsing) are all in the main.c file to check. Not to modify tho as you have to compile with the rest of the archives; that's the "painter" executable sitting there. Note that there are a wide amount of reasons this executable may not work in your computer; this means the backend wont work, yet the frontend will.

# Getting Started

*set up the backend*
```bash
cd Graph
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

*set up the frontend*
```bash
apt update
apt install nodejs
apt install npm
npm install -g npm@latest
cd Graph/app/
npm install
```

# Usage

## Commands

*start the server*
```bash
cd Graph
source venv/bin/activate
uvicorn server.main:app --host 0.0.0.0 --reload
```

*start the app*
```bash
cd Graph/app
npm start
```

## Examples

There are some example files listed on the page. Still, in the `examples` directory there are some files ready to be uploaded.


# To do List

## General
- Deploy into a server
- Add better backend support (Change the executable into something better idk)

## Features
- Add some fixed graphs as a demo
- Better specify the input format
- Check for wrong inputs in the backend
- Make the random color palette wider
- Display the color of each node on hover
- Add a tool to create graphs on the page, via text
- Add the same tool via Vis
- Add contact info
- Work on server responses feedback

# License
Distributed under the MIT License.