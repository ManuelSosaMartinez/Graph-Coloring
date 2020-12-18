import subprocess
import json
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware


# f = open("../discreta/data/169.txt", "r")
# call(["./test"], stdin=f)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/graph/analize")
async def analize(file: UploadFile = File(...)):

    out = eval(subprocess.check_output(
        "./test", stdin=file.file))
    return out
