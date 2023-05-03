import React from 'react';

// React Context for Auth
import { useAuth } from '../../contexts/AuthContext';

export default function AppHeaderAuth() {
  // React Context: User Authentication
  const user = useAuth();
  
  console.log(`user = ${JSON.stringify(user)}`);
  console.log(user)

  // Dynamically update auth div based on user context
  const authElement = document.querySelector('.auth');
  if (authElement) {
    // Default sign in
    let html = '<a href= "/.auth/login/aad" class="auth-link">Sign In</a>';
    
    // User profile and sign out
    let clientPrincipal = (user && user.clientPrincipal) || null,
        userDetails     = (clientPrincipal && clientPrincipal.userDetails) || null;

    let userGroups = (clientPrincipal && clientPrincipal.groups) || null;

    if (userDetails) {
      html = `${userDetails} | <a href="/.auth/logout" class="auth-link">Sign Out</a>`;
    }

    authElement.innerHTML = html;
  }

  return (
    <div className="auth px-3"></div>
  );
};
