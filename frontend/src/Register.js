import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Reuse the new premium styles

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('client'); // Default role
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, role }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful! Please login.');
                navigate('/login');
            } else {
                setError(data.error || 'Registration failed');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-page-wrapper">
            <div className="login-container">
                {/* Information Panel - Mirrored for Register */}
                <div className="login-info-panel" style={{ order: 1 }}>
                    <div className="login-info-content">
                        <h2>Request Portal Access</h2>
                        <p>
                            Observant Security provides bespoke dashboards tailored to your role. Creating an account allows us to securely provision your access to private data.
                        </p>
                        <ul>
                            <li><strong>Clients:</strong> View performance metrics, feedback graphs, and turnover analysis.</li>
                            <li><strong>Employees:</strong> Access training materials, company handbooks, and schedules.</li>
                        </ul>
                        <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.9rem', color: '#rgba(255,255,255,0.7)' }}>
                            *For testing purposes, you can manually select a role during registration. In a production environment, this is managed by administrators.
                        </p>
                    </div>
                </div>

                {/* Form Panel */}
                <div className="login-form-panel" style={{ order: 2 }}>
                    <h2>Register Account</h2>
                    <p className="form-subtitle">Create a new secure profile</p>

                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="e.g. John Doe"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="name@company.com"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="password-toggle-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                    title={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                            <line x1="1" y1="1" x2="23" y2="23"></line>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Account Role (Testing)</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="client">Client Portal Access</option>
                                <option value="employee">Employee Portal Access</option>
                                <option value="admin">Administrator Access</option>
                            </select>
                        </div>
                        <button type="submit" className="login-btn">Create Profile</button>
                    </form>

                    <div className="auth-links">
                        Already have access? <Link to="/login">Sign In Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
