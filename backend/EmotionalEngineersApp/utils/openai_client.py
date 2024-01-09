import openai


def get_openai_client():
    return openai.OpenAI(
        organization='your-organization-id',
        api_key='your-api-key'
    )
