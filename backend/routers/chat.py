from fastapi import APIRouter
from pydantic import BaseModel
from utils.gemini import GeminiAgent

router = APIRouter(prefix="/chat", tags=["Chat"])
agent = GeminiAgent()

class ChatInput(BaseModel):
    message: str

@router.post("/")
async def chat_with_agent(data: ChatInput):
    reply = agent.chat(data.message)
    return {"reply": reply}
