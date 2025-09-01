import json

def load_catalog(path="data/catalog.json"):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def filter_products(catalog, filters: dict):
    category = filters.get("category", "").lower()
    features = filters.get("features", "").lower().split(",")
    budget = filters.get("budget")

    results = []
    for product in catalog:
        title = product["title"].lower()
        desc = product["description"].lower()
        price = product["price"]

        if category and category not in title and category not in desc:
            continue

        if budget and price > float(budget):
            continue

        if all(feature.strip() in desc or feature.strip() in title for feature in features if feature.strip()):
            results.append(product)

    return results[:5]
