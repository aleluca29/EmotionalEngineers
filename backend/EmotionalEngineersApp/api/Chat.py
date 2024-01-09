from openai import OpenAI

client = OpenAI(
    organization='org-Nuz0ao27sIfF8koeV03ySbSm', api_key='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'
)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

print(completion.choices[0].message)
