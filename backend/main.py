from fastapi import FastAPI
from routers import chat
from routers import recommend
from routers import image_search

app = FastAPI(
    title="Project Palona AI Shopping Assistant",
    version="0.1.0"
)

# Include routers
app.include_router(chat.router)
app.include_router(recommend.router)
app.include_router(image_search.router)

# You can add more routers (e.g., recommend, image_search) as you implement them