import React, { useState } from "react";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const [mode, setMode] = useState<'signup' | 'login'>('signup');

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#fff', padding: '2rem', borderRadius: '12px', maxWidth: 400, width: '100%', position: 'relative', boxShadow: '0 4px 32px rgba(0,0,0,0.15)'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#333'
        }} aria-label="Close">×</button>
        {mode === 'signup' ? (
          <>
            <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>Wait! Don't Miss Your Free Trial!</h2>
            <p style={{ color: '#444', marginBottom: 24 }}>
              Experience the power of AI-driven CRM. Sign up now and get 14 days free—no credit card required!
            </p>
            <form>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Name</label>
                <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ddd', fontSize: 16 }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Phone Number or Email</label>
                <input type="text" placeholder="Enter your phone number or email" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ddd', fontSize: 16 }} />
              </div>
              <button type="submit" style={{ width: '100%', background: '#222', color: '#fff', padding: 14, borderRadius: 6, fontWeight: 700, fontSize: 18, border: 'none', cursor: 'pointer', marginBottom: 8 }}>
                Submit
              </button>
            </form>
            <div style={{ marginTop: 8, textAlign: 'center', color: '#888', fontSize: 15 }}>
              Already have an account?{' '}
              <span style={{ fontWeight: 600, color: '#111', cursor: 'pointer' }} onClick={() => setMode('login')}>
                Login
              </span>
            </div>
          </>
        ) : (
          <>
            <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>Login to your account</h2>
            <form>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Phone Number or Email</label>
                <input type="text" placeholder="Enter your phone number or email" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ddd', fontSize: 16 }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Password</label>
                <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ddd', fontSize: 16 }} />
              </div>
              <button type="submit" style={{ width: '100%', background: '#222', color: '#fff', padding: 14, borderRadius: 6, fontWeight: 700, fontSize: 18, border: 'none', cursor: 'pointer', marginBottom: 8 }}>
                Login
              </button>
            </form>
            <div style={{ marginTop: 8, textAlign: 'center', color: '#888', fontSize: 15 }}>
              Don't have an account?{' '}
              <span style={{ fontWeight: 600, color: '#111', cursor: 'pointer' }} onClick={() => setMode('signup')}>
                Sign up
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal; 