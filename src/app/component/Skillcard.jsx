import React from 'react';

const SkillCard = ({ skill, level }) => {
    return (
        <div className="card bg-dark text-light border border-secondary shadow-sm rounded-4 p-3 mb-4">
            <h5 className="mb-3">{skill}</h5>
            <div className="d-flex align-items-center">
                <span className="me-2 text-info fw-semibold">Learning</span>
                <div className="progress flex-grow-1 me-2" style={{ height: '8px' }}>
                    <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: `${level}%`, transition: 'width 0.6s ease' }}
                        aria-valuenow={level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <span className="text-muted small fw-semibold">{level}%</span>
            </div>
        </div>
    );
};

export default SkillCard;

