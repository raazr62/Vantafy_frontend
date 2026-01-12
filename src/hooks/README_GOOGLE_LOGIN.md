# Google Login Custom Hook Documentation

## Overview

The `useGoogleLoginHook` is a custom React hook that handles Google OAuth authentication flow and integrates with your backend API.

## Features

- ✅ Google OAuth 2.0 implicit flow
- ✅ Automatic token submission to backend
- ✅ Loading state management
- ✅ Error handling with user-friendly messages
- ✅ Automatic navigation on success
- ✅ Toast notifications

## Hook Structure

### File: `useGoogleLoginHook.js`

```javascript
export const useGoogleLoginHook = () => {
  // Returns: { googleLogin, isPending }
};
```

### Return Values

| Property      | Type       | Description                            |
| ------------- | ---------- | -------------------------------------- |
| `googleLogin` | `Function` | Function to trigger Google OAuth popup |
| `isPending`   | `Boolean`  | Loading state during API call          |

## Usage Example

### In Your Component

```javascript
import { useGoogleLoginHook } from "@/hooks/useGoogleLoginHook";

const YourComponent = () => {
  const { googleLogin, isPending: isGoogleLoading } = useGoogleLoginHook();

  return (
    <button onClick={googleLogin} disabled={isGoogleLoading}>
      {isGoogleLoading ? "Signing in..." : "Sign in with Google"}
    </button>
  );
};
```

## How It Works

### Step-by-Step Flow

1. **User clicks the Google login button**

   - Triggers `googleLogin()` function

2. **Google OAuth popup opens**

   - User selects their Google account
   - User grants permissions

3. **Google returns access token**

   - `onSuccess` callback is triggered
   - Access token is extracted from response

4. **Token sent to backend**

   - `sendGoogleToken` mutation is called
   - POST request to `/google-auth/` endpoint
   - Payload: `{ access_token: "..." }`

5. **Backend response handling**
   - **Success**: Shows success toast → Navigates to `/dashboard`
   - **Error**: Shows error toast with message

## API Integration

### Expected Backend Endpoint

**Endpoint:** `POST /google-auth/`

**Request Body:**

```json
{
  "access_token": "ya29.a0AfH6SMBx..."
}
```

**Success Response:**

```json
{
  "message": "Sign In Successful!",
  "user": { ... },
  "token": "..."
}
```

**Error Response:**

```json
{
  "message": "Authentication failed",
  "error": "Invalid token"
}
```

## Error Handling

The hook handles two types of errors:

### 1. Google OAuth Errors

- User closes popup
- Network issues
- Invalid credentials

**User sees:** "Google authentication failed. Please try again."

### 2. Backend API Errors

- Invalid token
- Server errors
- Network issues

**User sees:** Custom error message from backend or "Google login failed. Please try again."

## Key Improvements Over Previous Version

### ❌ Previous Issues

```javascript
// WRONG: usePost is a hook, can't be called in callback
const res = usePost("/google-auth/", { access_token });
```

### ✅ Fixed Implementation

```javascript
// CORRECT: usePost called at top level, mutate function called in callback
const { mutate: sendGoogleToken } = usePost({
  endpoint: "/google-auth/",
  onSuccess: (data) => {
    /* handle success */
  },
});

// Later in callback:
sendGoogleToken({ access_token });
```

## Dependencies

- `@react-oauth/google` - Google OAuth library
- `react-router` - Navigation
- `react-hot-toast` - Toast notifications
- `@tanstack/react-query` - API state management (via usePost)

## Configuration Requirements

Make sure you have Google OAuth configured in your app:

```javascript
// In your main App or index file
import { GoogleOAuthProvider } from "@react-oauth/google";

<GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
  <App />
</GoogleOAuthProvider>;
```

## Customization

### Change Success Navigation

```javascript
onSuccess: (data) => {
  toast.success(data?.message || "Sign In Successful!");
  navigate("/your-custom-path"); // Change this
};
```

### Add Additional Data to Request

```javascript
onSuccess: (tokenResponse) => {
  sendGoogleToken({
    access_token: tokenResponse.access_token,
    role: "customer", // Add custom fields
    source: "signup_page",
  });
};
```

### Custom Error Messages

```javascript
onError: (error) => {
  const customMessage =
    error?.response?.data?.message || "Your custom error message";
  toast.error(customMessage);
};
```

## Testing

### Manual Testing Checklist

- [ ] Click Google login button
- [ ] Verify popup opens
- [ ] Select Google account
- [ ] Verify loading state shows
- [ ] Verify success toast appears
- [ ] Verify navigation to dashboard
- [ ] Test closing popup (should show error)
- [ ] Test with invalid credentials
- [ ] Test with network offline

## Troubleshooting

### Issue: "Google authentication failed"

**Cause:** User closed popup or OAuth error  
**Solution:** Ask user to try again

### Issue: "Google login failed. Please try again."

**Cause:** Backend API error  
**Solution:** Check backend logs, verify endpoint is correct

### Issue: Hook doesn't work

**Cause:** Missing GoogleOAuthProvider  
**Solution:** Wrap app with GoogleOAuthProvider

### Issue: Token not reaching backend

**Cause:** Endpoint mismatch  
**Solution:** Verify endpoint in usePost matches your backend route

## Best Practices

1. **Always show loading state** - Prevents multiple clicks
2. **Disable button while loading** - Better UX
3. **Log errors to console** - Easier debugging
4. **Use meaningful error messages** - Help users understand what went wrong
5. **Handle all error cases** - OAuth errors AND API errors

## Related Files

- `src/hooks/useGoogleLoginHook.js` - The hook itself
- `src/hooks/useApi.js` - API utilities (usePost)
- `src/components/AuthComponent/SignUpForm.jsx` - Usage example
