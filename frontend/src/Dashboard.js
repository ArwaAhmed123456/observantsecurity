import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AnalyticsGraphs from './AnalyticsGraphs';

const Dashboard = () => {
    const { user, logout, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    if (loading || !user) {
        return <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;
    }

    return (
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', background: '#f9f9f9', minHeight: '100vh', marginTop: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', color: '#1B2631' }}>
                        {user.role === 'client' ? 'Client Portal' : user.role === 'employee' ? 'Employee Portal' : 'Admin Dashboard'}
                    </h1>
                    <p style={{ color: '#666' }}>Welcome back, <strong>{user.name}</strong> ({user.role})</p>
                </div>
                <button
                    onClick={() => { logout(); navigate('/login'); }}
                    style={{ padding: '10px 20px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Logout
                </button>
            </div>

            {/* KPI Section */}
            <section style={{ marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#1B2631' }}>KPI Performance Scoring Card</h3>
                <AnalyticsGraphs type="kpi" />
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                {/* Feedback Graphs */}
                <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', minHeight: '350px' }}>
                    <AnalyticsGraphs type="feedback" />
                </div>

                {/* Turnover/Sickness Graphs */}
                <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', minHeight: '350px' }}>
                    {user.role === 'client' || user.role === 'admin' ? (
                        <AnalyticsGraphs type="turnover" />
                    ) : (
                        <AnalyticsGraphs type="sickness" />
                    )}
                </div>
            </div>

            {/* Existing Content Cards */}
            <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h3 style={{ marginBottom: '20px' }}>Quick Access</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                        <h4 style={{ marginBottom: '10px' }}>Policies & Handbook</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Access important company policies and your handbook here.</p>
                        <button
                            onClick={() => navigate('/policy/data-protection')}
                            style={{ marginTop: '15px', padding: '8px 16px', background: '#1B2631', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            View Policies
                        </button>
                    </div>

                    <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                        <h4 style={{ marginBottom: '10px' }}>Trainings</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Stay compliant with current security standards (BS7858, etc).</p>
                        <button
                            onClick={() => navigate('/trainings')}
                            style={{ marginTop: '15px', padding: '8px 16px', background: '#1B2631', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Start Training
                        </button>
                    </div>

                    <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                        <h4 style={{ marginBottom: '10px' }}>Latest News</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Stay updated with the latest company announcements.</p>
                        <button
                            onClick={() => navigate('/news')}
                            style={{ marginTop: '15px', padding: '8px 16px', background: '#1B2631', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Read News
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
