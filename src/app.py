# from fastapi import FastAPI, Request
# from fastapi.templating import Jinja2Templates
# from fastapi.staticfiles import StaticFiles
#
# app = FastAPI()
#
# # Mount the "static" directory as a static files directory
# app.mount("/static", StaticFiles(directory="static"), name="static")
#
# # Create an instance of the Jinja2Templates class
# templates = Jinja2Templates(directory="templates")
#
# # Define a route that returns an HTML template
# @app.get("/")
# async def read_root(request: Request):
#     # Define a dictionary of data to be passed to the template
#     data = {"title": "My FastAPI App", "message": "Hello, world!"}
#
#     # Render the "index.html" template with the data
#     return templates.TemplateResponse("index.html", {"request": request, "data": data})
