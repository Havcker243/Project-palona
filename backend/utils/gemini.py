# utils/gemini.py
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

class GeminiAgent:
    def __init__(self, model_name: str = "gemini-pro"):
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY not found in environment.")
        
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel(model_name)

    def extract_product_intent(self, user_input: str) -> dict:
        prompt = f"""You are an AI shopping assistant. Extract the following structured fields from this customer query:
        Query: "{user_input}"
        Return in JSON with keys:
        - category (string)
        - features (comma-separated string)
        - budget (number, or null if not mentioned)    
        Just return the JSON, no explanation.   
        """
        try:
            raw = self.chat(prompt)
            import json
            return json.loads(raw)
        except Exception as e:
            return {"category": "", "features": "", "budget": None}
        
    def describe_image(self, image_bytes: bytes) -> str:
        """
        Sends an image to Gemini and returns a description.
        """
        try:
            import PIL.Image
            from io import BytesIO
            image = PIL.Image.open(BytesIO(image_bytes))
            response = self.model.generate_content(
                ["Describe this product for shopping intent.", image]
            )
            return response.text
        except Exception as e:
            return f"❌ Gemini image error: {str(e)}"

    def chat(self, user_input: str, system_prompt: str = None) -> str:
        try:
            if system_prompt:
                convo = self.model.start_chat(history=[
                    {"role": "user", "parts": [user_input]},
                    {"role": "model", "parts": [system_prompt]},
                ])
                response = convo.send_message(user_input)
            else:
                response = self.model.generate_content(user_input)
            
            return response.text
        except Exception as e:
            return f"❌ Gemini error: {str(e)}"

    def classify_intent(self, user_input: str) -> str:
        # You can improve this later — for now, use a prompt-based method
        prompt = f"""Classify the user's intent from the message below.
Your answer must be one of: 'chat', 'recommend', 'image_search'.

Message: "{user_input}"
Answer:"""
        return self.chat(prompt).strip().lower()
