from functools import wraps
from flask import request, g
import os


def verify_user(redis, request, permission_level):
    """
    Verifies the user's access token.
    Raises an exception if the token is invalid.
    """
    try:
        username = request.cookies[os.environ["USERNAME_TOKEN"]]
        access_token = request.cookies[os.environ["ACCESS_TOKEN"]]
    except Exception as e:
        raise Exception("No token provided.")
    
    try:
        redis_entry = redis.get(username)
        if redis_entry is None:
            raise Exception("No valid token found.")
        
        [stored_access_token, ip_address, permissions] = redis_entry.split("_")
        if stored_access_token != access_token:
            raise Exception("Invalid token.")
        if int(permissions) > permission_level:
            raise Exception("Insufficient permissions.")
        if request.remote_addr != ip_address:
            raise Exception("Invalid IP address.")
        
    except Exception as e:
        raise Exception("Invalid token.")


def require_auth(permission_level):
    """
    Decorator that checks the user's access token.
    """
    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            try:
                verify_user(g.red, request, permission_level)
            except Exception as e:
                return "Invalid token.", 401

            return f(*args, **kwargs)
        return decorated
    return decorator