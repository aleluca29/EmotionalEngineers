from fastapi import APIRouter, HTTPException

from utils.openai_client import get_openai_client

router = APIRouter()


@router.post("/chat")
async def chat_with_openai(user_input: str):
    client = get_openai_client()
    try:
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_input}
            ]
        )
        return {"response": completion.choices[0].message['content']}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
