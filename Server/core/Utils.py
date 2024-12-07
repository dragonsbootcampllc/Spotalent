from datetime import datetime, timezone

from rest_framework.authtoken.models import Token

def parse_datetime_with_utc_timezone(datetime_str):
    try:
        # Try parsing datetime string with timezone info
        datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%d %H:%M:%S%z")
    except ValueError:
        try:
            # Try parsing datetime string without timezone info
            datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%d %H:%M:%S")
        except ValueError:
            try: 
                # Try parsing datetime string without timezone info and time
                datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%d")
            except ValueError:
                raise ValueError("Unsupported datetime format")

    # If the parsed datetime object has no timezone info, assume UTC
    if datetime_obj.tzinfo is None:
        datetime_obj = datetime_obj.replace(tzinfo=timezone.utc)
    else:
        # If the parsed datetime object has timezone info, convert it to UTC
        datetime_obj = datetime_obj.astimezone(timezone.utc)

    return datetime_obj

def generate_response_with_token(user,additional_data = None):
    """
    Generate a standardized response including user toke and ID.
    
    param user : the user object.
    param additional_data : any additional data to include in the response.
    response : a dictionary including the token, user ID, and additional data.
    """
    try:
        token, _ = Token.objects.get_or_create(user=user)
        
        response_data = {
            'id': user.id,
            'token': token.key,
        }
        if additional_data:
            response_data.update(additional_data)
        return response_data
    except Exception as e:
        raise Exception(f"Error generating response with token: {str(e)}")
