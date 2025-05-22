import React, { useState, useEffect } from "react";

interface AuthModalProps {
  open?: boolean;
  onClose?: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open: openProp, onClose }) => {
  const [open, setOpen] = useState(openProp ?? false);

  useEffect(() => {
    if (openProp === undefined) {
      const timer = setTimeout(() => setOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [openProp]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  const [mode, setMode] = useState<'signup' | 'login'>('signup');

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #ffffff, #f8f9fa)', padding: '2rem', borderRadius: '16px', maxWidth: 400, width: '100%', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; }}>
        <button onClick={handleClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#333', zIndex: 2
        }} aria-label="Close">×</button>
        {mode === 'signup' ? (
          <>
            <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>Wait! Don't Miss Your Free Trial!</h2>
            <p style={{ color: '#444', marginBottom: 24 }}>
              Experience the power of CVK CRM. Sign up now and get 14 days free—no credit card required!
            </p>
            <form>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Name</label>
                <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ddd', fontSize: 16 }} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Phone Number</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select
                    style={{
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '16px',
                      width: '40%',
                    }}
                    defaultValue="+91"
                  >
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+91">🇮🇳 +91 (India)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+61">🇦🇺 +61 (Australia)</option>
                    <option value="+81">🇯🇵 +81 (Japan)</option>
                    <option value="+49">🇩🇪 +49 (Germany)</option>
                    <option value="+33">🇫🇷 +33 (France)</option>
                    <option value="+86">🇨🇳 +86 (China)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+92">🇵🇰 +92 (Pakistan)</option>
                  </select>
                  <input
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="Enter 10-digit number"
                    style={{
                      flex: 1,
                      padding: 12,
                      borderRadius: 6,
                      border: '1px solid #ddd',
                      fontSize: 16,
                    }}
                  />
                </div>
              </div>
              <button type="submit" style={{ width: '100%', background: '#222', color: '#fff', padding: 14, borderRadius: 6, fontWeight: 700, fontSize: 18, border: 'none', cursor: 'pointer', marginBottom: 8, transition: 'background 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.background = '#333'} onMouseOut={(e) => e.currentTarget.style.background = '#222'}>
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
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Phone Number</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select
                    style={{
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '16px',
                      width: '40%',
                    }}
                    defaultValue="+91"
                  >
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+91">🇮🇳 +91 (India)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+61">🇦🇺 +61 (Australia)</option>
                    <option value="+81">🇯🇵 +81 (Japan)</option>
                    <option value="+49">🇩🇪 +49 (Germany)</option>
                    <option value="+33">🇫🇷 +33 (France)</option>
                    <option value="+86">🇨🇳 +86 (China)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+92">🇵🇰 +92 (Pakistan)</option>
                  </select>
                  <input
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="Enter 10-digit number"
                    style={{
                      flex: 1,
                      padding: 12,
                      borderRadius: 6,
                      border: '1px solid #ddd',
                      fontSize: 16,
                    }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Password</label>
                <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: 12, borderRadius: 6, border: '1px solid #ddd', fontSize: 16 }} />
              </div>
              <button type="submit" style={{ width: '100%', background: '#222', color: '#fff', padding: 14, borderRadius: 6, fontWeight: 700, fontSize: 18, border: 'none', cursor: 'pointer', marginBottom: 8, transition: 'background 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.background = '#333'} onMouseOut={(e) => e.currentTarget.style.background = '#222'}>
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
