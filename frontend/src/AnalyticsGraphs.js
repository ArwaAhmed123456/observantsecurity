import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

const AnalyticsGraphs = ({ type }) => {
    // Mock data for graphs
    const feedbackData = [
        { name: 'Jan', client: 85, operative: 70, consumer: 90 },
        { name: 'Feb', client: 88, operative: 75, consumer: 92 },
        { name: 'Mar', client: 92, operative: 82, consumer: 88 },
        { name: 'Apr', client: 90, operative: 80, consumer: 95 },
    ];

    const turnoverData = [
        { name: '2022', rate: 12 },
        { name: '2023', rate: 10 },
        { name: '2024', rate: 8 },
        { name: '2025', rate: 5 },
    ];

    const sicknessData = [
        { name: 'Holiday', value: 400 },
        { name: 'Sickness', value: 120 },
    ];

    const COLORS = ['#D4AF37', '#1B2631', '#FF8042', '#00C49F'];

    const renderKPIs = () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={kpiCardStyle}>
                <h4>Safety Score</h4>
                <h2>98%</h2>
                <p>+2% from last month</p>
            </div>
            <div style={kpiCardStyle}>
                <h4>Response Time</h4>
                <h2>4.2m</h2>
                <p>-0.5m faster</p>
            </div>
            <div style={kpiCardStyle}>
                <h4>Staff Attendance</h4>
                <h2>99.1%</h2>
                <p>High compliance</p>
            </div>
            <div style={kpiCardStyle}>
                <h4>Client Retention</h4>
                <h2>95%</h2>
                <p>Steady growth</p>
            </div>
        </div>
    );

    const kpiCardStyle = {
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        borderLeft: '4px solid #D4AF37'
    };

    switch (type) {
        case 'kpi':
            return renderKPIs();
        case 'feedback':
            return (
                <div style={{ height: 300, width: '100%' }}>
                    <h4 style={{ marginBottom: '20px' }}>Feedback Performance (Score 0-100)</h4>
                    <ResponsiveContainer>
                        <BarChart data={feedbackData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="client" fill="#D4AF37" name="Client Feedback" />
                            <Bar dataKey="operative" fill="#1B2631" name="Operative Feedback" />
                            <Bar dataKey="consumer" fill="#8884d8" name="Consumer Feedback" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            );
        case 'turnover':
            return (
                <div style={{ height: 300, width: '100%' }}>
                    <h4 style={{ marginBottom: '20px' }}>Client Turnover Analysis (%)</h4>
                    <ResponsiveContainer>
                        <LineChart data={turnoverData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="rate" stroke="#D4AF37" activeDot={{ r: 8 }} name="Turnover Rate" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            );
        case 'sickness':
            return (
                <div style={{ height: 300, width: '100%' }}>
                    <h4 style={{ marginBottom: '20px' }}>Staff Holiday vs Sickness</h4>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={sicknessData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                label
                            >
                                {sicknessData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            );
        default:
            return null;
    }
};

export default AnalyticsGraphs;
