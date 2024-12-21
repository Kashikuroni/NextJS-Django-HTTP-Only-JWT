from typing import Any

from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework.exceptions import AuthenticationFailed


User = get_user_model()


class LoginSerializer(serializers.Serializer):
    """
    Serializer for user login.

    This serializer authenticates a user by email and password,
    and upon successful authentication, it generates and returns
    both refresh and access tokens.    
    """
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, attrs: Any) -> dict:
        email: str = attrs.get('email')
        password: str = attrs.get('password')
        
        if email and password:
            user = authenticate(
                request=self.context.get('request'),
                email=email,
                password=password
            )
            if not user:
                raise AuthenticationFailed('Invalid credentials')
        else:
            raise AuthenticationFailed('Email and password is required')
        
        refresh: RefreshToken = RefreshToken.for_user(user)  # pyright: ignore
        access_token = refresh.access_token
        
        return {
            'refresh': str(refresh),
            'access': access_token,
        }


class RefreshSerializer(serializers.Serializer):
    """
    Serializer for refreshing JWT tokens.

    This serializer takes a refresh token and validates it. If valid,
    it generates a new access token and refresh token for the user.
    """
    refresh = serializers.CharField()
    
    def validate(self, attrs: Any) -> dict:
        refresh_token = attrs.get('refresh')
        try:
            refresh: RefreshToken = RefreshToken(refresh_token)
            refresh.verify()
            
            user_id = refresh.get('user_id')
            user = User.objects.get(id=user_id)

            access_token: str = str(refresh.access_token)
            new_refresh = RefreshToken.for_user(user)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        
        return {
            'access': access_token,
            'refresh': str(new_refresh),
        }


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for user data.

    This serializer converts user model instances into JSON format
    and vice versa. It includes fields for basic user information.
    """
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name']
