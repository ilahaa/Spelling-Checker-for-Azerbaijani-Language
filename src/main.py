from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from SpellChecker.Decoder import predictor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

@app.post("/api/spellingchecker")
async def correct_text(request: TextRequest):
    text = request.text
    corrected_text = predictor(text)
    return {"correctedText": corrected_text}
