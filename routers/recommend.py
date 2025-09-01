from fastapi import APIRouter
from pydantic import BaseModel
from utils.gemini import GeminiAgent
from utils.product_catalog import load_catalog, filter_products

router = APIRouter(prefix="/recommend", tags=["Recommend"])
agent = GeminiAgent()

class RecommendInput(BaseModel):
    message: str

@router.post("/")
async def recommend_products(data: RecommendInput):
    # Use Gemini to extract intent
    filters = agent.extract_product_intent(data.message)
    catalog = load_catalog()
    results = filter_products(catalog, filters)
    return {"results": results}
