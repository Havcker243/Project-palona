from fastapi import APIRouter, File, UploadFile
from utils.gemini import GeminiAgent
from utils.product_catalog import load_catalog, filter_products
from fastapi import HTTPException

router = APIRouter(prefix="/image_search", tags=["Image Search"])
agent = GeminiAgent(model_name="gemini-2.5-pro")

@router.post("/")
async def image_search(file: UploadFile = File(...)):
    try:
        # Placeholder: read image bytes
        image_bytes = await file.read()
        # Send image to Gemini for description
        description = agent.describe_image(image_bytes)
        # Use the description as a query to extract intent
        filters = agent.extract_product_intent(description)
        catalog = load_catalog()
        results = filter_products(catalog, filters)
        return {
            "description": description,
            "filters": filters,
            "results": results
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image search failed: {str(e)}")