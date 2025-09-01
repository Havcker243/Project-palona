import json

def load_catalog(path="data/catalog.json"):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def filter_products(catalog, query):
    query_lower = query.lower()
    results = []

    for item in catalog:
        title = item["title"].lower()
        desc = item["description"].lower()
        
        if query_lower in title or query_lower in desc:
            results.append(item)
    
    return results[:5]  # Return top 5 matches